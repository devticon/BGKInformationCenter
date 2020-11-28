import { useCallback, useEffect, useState } from 'react';
import { useAuthContext } from '../contexts';
import { gun, watchMany } from '../gun';
import { Message } from '../models';

export function useChannelMessages(teamId: string, channelId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const { userId } = useAuthContext();

  useEffect(() => {
    setMessages([]);

    const unsubscribe = watchMany(`teams/${teamId}/channels/${channelId}/messages`, async _messages => {
      _messages = _messages.filter(Boolean);
      _messages.sort((a, b) => a.createdDateTime.localeCompare(b.createdDateTime));
      setMessages(_messages.filter(Boolean));
    });

    return () => unsubscribe();
  }, [channelId, teamId]);

  const sendMessage = useCallback(
    (content: string) => {
      const payload = { content, userId };
      gun.get(`teams`).get(teamId).get('channels').get(channelId).get('messages-to-sync').set(payload);
    },
    [channelId, teamId, userId],
  );

  return { messages, sendMessage };
}
