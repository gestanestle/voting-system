import { useQuery } from '@tanstack/react-query'

import { HackathonSchema } from '@/types/hackathon'
import Hackathon from '@/components/Hackathon'

const Season1 = () => {
  const { data: hackathon } = useQuery({
    queryKey: ['hackathon'],
    queryFn: async () => {
      const res = await fetch('api/v1/hackathons/1')
      if (res.status == 200) {
        const data = await res.json()
        console.log(data)
        return HackathonSchema.parse(data)
      }
    }
  })

  console.log(hackathon)
  return (
    <>
      <Hackathon />
    </>
  )
}

export default Season1
