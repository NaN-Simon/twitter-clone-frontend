import { getProfileAvatar } from "@/services/profileService/profileService"
import { useQuery } from "react-query"
import demoAvatar from '@/demoData/avatardemo1694626287063_INl3HaWCkDQ.jpg'

const profileConfig = {
  getProfileAvatar: {
    key: 'getProfileAvatar',
    request: async () => {
      // const response = await getProfileAvatar()
      // return response.data
      return demoAvatar
    },
  },
}

export const useGetProfileAvatarQuery = () => {
  const { getProfileAvatar: config } = profileConfig

  const state = useQuery(config.key, config.request, {
    onSuccess() {
      console.log('/api/v1/profiles/images/avatar received successfully')
    },
    onError() {
      console.error('/api/v1/profiles/images/avatar ERROR')
    },
  })
  return state
}