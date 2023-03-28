import {
  Button,
  Heading,
  withAuthenticator,
  WithAuthenticatorProps,
} from '@aws-amplify/ui-react'

const Protected = ({ signOut, user }: WithAuthenticatorProps) => {
  if (!user) return <>You are not signed in, please signed in first.</>
  console.log('user', user)
  return (
    <div>
      <Heading level={1}>Hello {user.username}</Heading>
      <Button onClick={signOut} style={styles.button}>
        Sign out
      </Button>
    </div>
  )
}

const styles = {
  container: {
    width: 400,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: 'none',
    backgroundColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: 'black',
    color: 'white',
    outline: 'none',
    fontSize: 18,
    padding: '12px 0px',
  },
}

export default withAuthenticator(Protected)
