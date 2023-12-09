import Homepage from "@/app/ui/homepage/Homepage"
import { createClient } from "@/utils/supabase/client"


export default function Home() {
  const callDaApi = async () => {
  const supabase = createClient()
  let {data: selections, error} = await supabase.from("selections").select("*");
  console.log('selections', selections)
  // console.log('error here', error)
  }
  callDaApi()

  
  return (
   <Homepage />
  )
}
