import { useCallback, useEffect, useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { getMany, gun } from '../gun';

export function useChannelMessages(teamId: string, channelId: string) {
  const [messages, setMessages] = useState<any[]>([]);
  const { userId } = useAuthContext();

  useEffect(() => {
    getMany(`teams/${teamId}/channels/${channelId}/messages`).then(async messages => {
      messages = messages.filter(Boolean);
      setMessages(messages);
    });
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
