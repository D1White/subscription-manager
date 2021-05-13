import passport from 'passport'
import { Strategy as LocalStategy } from 'passport-local'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

import { IUser, UserModel } from '../models/user.model'

import { generateMD5 } from '../utils/generateHash'

passport.use(
  new LocalStategy(async (username, password, done) => {
    try {
      const user = await UserModel.findOne({
        $or: [{ email: username }, { username }],
      }).exec()

      if (user && user.password === generateMD5(password + process.env.SECRET_KEY)) {
        done(null, user)
      } else {
        done(null, false)
      }
    } catch (error) {
      done(error, false)
    }
  }),
)

passport.use(
  new JwtStrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromHeader('token'),
    },
    async (payload, done) => {
      try {
        const user = await UserModel.findById(payload.data._id).exec()

        if (user) {
          return done(null, user)
        }

        return done(null, false)
      } catch (error) {
        done(error, false)
        return 0
      }
    },
  ),
)

passport.serializeUser((user: IUser, done) => {
  done(null, user._id)
})

passport.deserializeUser((id: string, done) => {
  UserModel.findById(id, (err, user) => {
    done(err, user)
  })
})

export { passport }
