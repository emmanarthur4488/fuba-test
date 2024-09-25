
import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import {useNavigate} from "react-router-dom"
import Navbar from '../Navbar/Navbar'

  const supabase = createClient(
    "https://guhaxgredkczpzaidutc.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1aGF4Z3JlZGtjenB6YWlkdXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5NzEyMTQsImV4cCI6MjAzNDU0NzIxNH0.6z1f7PbAKupPdqoKyJa3XxDYRKSHBGnKBTjyGZY41n0")

  export default function LoginLearner() {
    const [session, setSession] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])
    if (!session) {
      return (
        <div>
          <Navbar/>
          <div className="login-container">
            <Auth appearance={{ theme: ThemeSupa }} supabaseClient={supabase} />
          </div>
        </div>
      )
    }
    else {
      return navigate("/landingpage")
    }
  }

