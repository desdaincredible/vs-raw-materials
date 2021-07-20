import executeQuery from '../../../lib/db'

async function userUtil(req, res) {
  if (req.method === 'GET') {
    const result = await executeQuery({
      query: `SELECT Username, Email FROM Users`,
    })
    console.log(result)
    //   if (result.length) {
    //     status = 200
    //     returnResult = result[0]
    //   } else {
    //     status = 404
    //     returnResult = { error: 'Not found' }
    //   }
    //   res.status(status).json(returnResult)
  } else if (req.method === 'POST') {
    try {
      const result = await executeQuery({
        query: `INSERT INTO Users (Username, Password, Email, isAdmin) 
                VALUES (
                    ${req.body.username}, 
                    ${req.body.password}, 
                    ${req.body.email}, 
                    ${req.body.isAdmin}
                )`,
      })
      console.log(result)
      //   if (result.length) {
      //     status = 200
      //     returnResult = result[0]
      //   } else {
      //     status = 404
      //     returnResult = { error: 'Not found' }
      //   }
      //   res.status(status).json(returnResult)
    } catch (error) {
      console.log(error)
    }
  }
}

export default userUtil
