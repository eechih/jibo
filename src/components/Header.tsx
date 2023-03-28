import {
  Button,
  withAuthenticator,
  WithAuthenticatorProps,
} from '@aws-amplify/ui-react'

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
function Header({ signOut, user }: WithAuthenticatorProps) {
  console.log('user', user)
  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div>
        <p>
          {user && (
            <>
              <span>
                <small>Signed in as </small>
                <strong>{user.attributes?.email ?? user.username}</strong>
              </span>
              <Button onClick={signOut}>Sign out</Button>
            </>
          )}
        </p>
      </div>
    </header>
  )
}

export default withAuthenticator(Header)
