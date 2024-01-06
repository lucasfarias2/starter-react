import { useQueryClient } from '@tanstack/react-query';
import EQueryKeys from '@/shared/queries/query-keys';

export default function useCurrentUser() {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData([EQueryKeys.User]) as PFYUser;
  return user;
}
