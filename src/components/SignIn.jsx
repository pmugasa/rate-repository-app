import { View, TextInput, Pressable, Text } from 'react-native'
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Username is required'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required')
})

const initialValues = {
  username: '',
  password: ''
}

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 16,
          justifyContent: 'center'
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: formik.errors.username ? '#d73a4a' : '#586069',
            padding: 8,
            borderRadius: 4
          }}
          placeholder='Username'
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        {formik.touched.username && formik.errors.username && (
          <Text style={{ color: '#d73a4a' }}>{formik.errors.username}</Text>
        )}

        <TextInput
          placeholder='Password'
          secureTextEntry
          style={{
            borderWidth: 1,
            borderColor: formik.errors.password ? '#d73a4a' : '#586069',
            padding: 8,
            borderRadius: 4,
            marginTop: 16
          }}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        />
        {formik.touched.password && formik.errors.password && (
          <Text style={{ color: '#d73a4a' }}>{formik.errors.password}</Text>
        )}
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
