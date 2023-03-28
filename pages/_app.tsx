import '@/styles/globals.css'
import {
  Authenticator,
  Image,
  Text,
  useTheme,
  View,
} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import type { AppProps } from 'next/app'

import awsConfig from '@/src/aws-exports'

Amplify.configure(awsConfig)

const components = {
  Header: () => {
    const { tokens } = useTheme()
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        />
      </View>
    )
  },
  Footer: () => {
    const { tokens } = useTheme()

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    )
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Authenticator socialProviders={['google']} components={components}>
      <Component {...pageProps} />
    </Authenticator>
  )
}
