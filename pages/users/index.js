import { useState } from 'react'
import Link from 'next/link'
import { Button, Form, Table } from 'reactstrap'
import Layout from '../../components/layout'
import Input from '../../components/form/input'

export default function UsersIndex() {
  const [data, setData] = useState({
    username: '',
    password: '',
  })
  function submit() {}
  return (
    <Layout>
      <h1>Users</h1>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>

      <Form className="w-50 mx-auto" onSubmit={submit}>
        <div className="mb-3">
          <Input
            label="Username"
            value={data.username}
            setValue={(value) => {
              setData((data) => ({
                ...data,
                username: value,
              }))
            }}
          />
        </div>
        <div className="mb-3">
          <Input
            label="Password"
            value={data.password}
            setValue={(value) => {
              setData((data) => ({
                ...data,
                password: value,
              }))
            }}
          />
        </div>
        <div className="d-flex justify-content-between">
          <Button type="submit" className="btn btn-primary">
            Sign in
          </Button>
          <Link href="/">
            <a>
              <small className="my-auto text-muted">Forgot password?</small>
            </a>
          </Link>
        </div>
      </Form>
    </Layout>
  )
}
