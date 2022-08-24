const mysql = require("mysql");

// import all the things we need
const GoogleStrategy = require("passport-google-oauth20").Strategy;

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          "252478383673-k2jq2i36g719sh5633tjbrso31uh6m28.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        //get the user data from google
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName || "",
          lastName: profile.name.familyName || "",
          image: profile.photos[0].value,
          email: profile.emails[0].value,
          fullName: profile.name.givenName + profile.name.familyName,
        };
        try {
          let query =
            "SELECT * " +
            "FROM  user " +
            "WHERE email = " +
            mysql.escape(newUser.email);
          db.query(query, (err, result) => {
            if (err) throw err;
            else {
              if (result.length) {
                done(null, result[0]);
              } else {
                db.query(
                  "INSERT INTO user " +
                    " VALUES ( '" +
                    newUser.fullName +
                    "' ,'" +
                    newUser.email +
                    "','" +
                    null +
                    "','" +
                    null +
                    "','" +
                    "google" +
                    "')",
                  (err, rows, fields) => {
                    if (err) throw err;

                    done(null, newUser);
                  }
                );
              }
            }
          });
        } catch (err) {
          console.error(err);
        }
      }
    )
  );

  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    console.log("serlize user", user)
    done(null, user.email);
  });

  // used to deserialize the user
  passport.deserializeUser((user, done) => {
    let query =
      "SELECT * " +
      "FROM  user " +
      "WHERE email = " +
      mysql.escape(user[0].email);
    db.query(query, (err, result) => {
      if (err) throw err;
      else {
        if (result.length) {
          done(null, result[0].email);
        }
      }
    });
  });
};
