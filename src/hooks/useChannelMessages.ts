import { useEffect, useState } from 'react';
import { getMany, getOnce } from '../gun';

export function useChannelMessages(teamId: string, channelId: string) {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    getMany(`me/teams/${teamId}/channels/${channelId}/messages`).then(async messages => {
      messages = messages.filter(Boolean);

      for (const message of messages) {
        if (message.body && message.body['#']) {
          message.body = await getOnce(message.body['#']);
        }
        if (message.from && message.from['#']) {
          message.from = await getOnce(message.from['#']);
        }
      }
      setMessages(messages);
    });
  }, [channelId, teamId]);

  return messages;
}
