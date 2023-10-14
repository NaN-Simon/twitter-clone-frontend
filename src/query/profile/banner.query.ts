import { getProfileBanner } from "@/services/profileService/profileService"
import { useQuery } from "react-query"
import demoBanner from '@/demoData/bannerdemo1692438747130_CGp71I2OOLo.jpg'

const profileConfig = {
  getProfileBanner: {
    key: 'getProfileBanner',
    request: async () => {
      // const response = await getProfileBanner()
      // return response.data
      return demoBanner
    },
  },
}

export const useGetProfileBannerQuery = () => {
  const { getProfileBanner: config } = profileConfig

  const state = useQuery(config.key, config.request, {
    onError() {
      console.error('баннер ERROR')
    },
  })
  return state
}