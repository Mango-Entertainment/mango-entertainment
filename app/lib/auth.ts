import { createClientReadOnly } from '@/utils/supabase/server'

export const readUserSession = async () => {
    const supabase = createClientReadOnly()
    return supabase.auth.getSession()
}