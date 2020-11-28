import { useEffect, useState } from 'react';
import { getMany } from '../gun';

export function useChannelMessages(teamId: string, channelId: string) {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    getMany(`teams/${teamId}/channels/${channelId}/messages`).then(async messages => {
      messages = messages.filter(Boolean);
      setMessages(messages);
    });
  }, [channelId, teamId]);

  return messages;
}
