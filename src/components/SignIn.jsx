import { View, TextInput, Pressable, Text } from 'react-native'
import { useFormik } from 'formik'

const initialValues = {
  username: '',
  password: ''
}

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit
  })
  return (
    <>
      <View style={{ flex: 1 / 4, backgroundColor: 'white', padding: 16 }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#586069',
            padding: 8,
            borderRadius: 4
          }}
          placeholder='Username'
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        <TextInput
          placeholder='Password'
          secureTextEntry
          style={{
            borderWidth: 1,
            borderColor: '#586069',
            padding: 8,
            borderRadius: 4,
            marginTop: 16
          }}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        <Pressable
          onPress={formik.handleSubmit}
          style={{
            backgroundColor: '#0366d6',
            height: 50,
            borderRadius: 4,
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>
            Sign in
          </Text>
        </Pressable>
      </View>
    </>
  )
}

const SignIn = () => {
  const onSubmit = (values) => console.log('submitted values:', values)
  return <SignInForm onSubmit={onSubmit} />
}

export default SignIn
