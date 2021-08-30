import executeQuery from '../../../lib/db'
const escape = require('sql-template-strings')

async function userUtil(req, res) {
  let status
  let returnResult

  try {
    let body = JSON.parse(req.body)
    let username = body.data.username
    let password = body.data.password

    let getUserRes = getUser({ username: username, password: password })

    if (getUserRes) {
      let loginUserRes = await loginUser(username)
      if (loginUserRes) {
        status = 200
        returnResult = getUserRes
      }
    } else {
      status = 404
      returnResult = { error: 'Not found' }
    }
  } catch (error) {
    console.error(error)
  }
  res.status(status).json(returnResult)
}

async function getUser(data) {
  try {
    let sql = escape`SELECT * FROM Users WHERE Username = ${data.username}`
    if (data.password) {
      sql.append(escape` AND Password = ${data.password}`)
    }

    const result = await executeQuery({
      query: sql,
    })
    return result[0]
  } catch (error) {
    console.error(error)
  }
}

async function loginUser(username) {
  try {
    let sql = escape`UPDATE Users SET isLoggedIn = true WHERE Username = ${username}`

    const result = await executeQuery({
      query: sql,
    })
    return result.affectedRows
  } catch (error) {
    console.error(error)
  }
}

async function logoutUser(username) {
  try {
    let sql = escape`UPDATE Users SET isLoggedIn = false WHERE Username = ${username}`

    const result = await executeQuery({
      query: sql,
    })
    return result.affectedRows
  } catch (error) {
    console.error(error)
  }
}

export default userUtil
