require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJ1YJFvbY3L*UAQAAG0HAAAKAAAAY3JlZHMuanNvbpVV25KiSBD9l3rVGLkqGtERg3ijBQERQTfmoYTiolhgVSHihP++gT3dPQ+7s708FUnFyZMnTyY*AS4yipaoAaOfoCTZFTLUHllTIjAC4yqOEQFdEEEGwQhok9lserNyzdIqt1ldQvx6SVYL6zKeOtGylK2NdwuqG7uJxQt4dEFZHfIs*ANgecO6v183yDVR2NSTdF7n*Z3kKMedvr5uYhxacq139ju8ewGPFhFmJMPJtEzRGRGYL1Fjw4x8jX5omcHG0Svl7h5l6qjqnT9UzgolsYz2IqfIeJ3Ks+Ne+yp9SOKjbHVsm6obeHJDI7qgjUDysXaeBooo+0p*KsQ0djnpjT7NEowiPUKYZaz5su6OYRwwb4jc*pS4nYlt5ZzFwwUSFlVRJ77X51L3Oh8405P5NeJRp29Yh2a*QYnto14x1zV3utujZHatb2K6tMtzkhtqj3Oc34nb5N0rp*+ju2ColnI5S3AdHicmLjWf7jdWf54f7LNiaVZp+sPZPOi5nv41+gNohJZoeH40H9JS32VpR7q5Rs+Is1ThbXVQK7E1DcJE8z7pQ1aRP7FcJ2ZV1aI1EWMZDwsiLz3XaFR0mK3meShrqr*SNH1+1K+YLI7jQqL5cValAirkKj2ZakXUBWuEhHRed0RglFba5ui8PCs6oUaPwIh*dAFBSUYZgSwrcBsTugBGVxeFBLGnuOAeF00QDsX9ABnx0rjwZxX6We*W1B6ts9lVuG2xbyLeXnovoAtKUoSIUhQtMsoK0piIUpggCkZ**egCjG7srW1tMpHvgjgjlHm4KvMCRu89ff8Iw7CoMHMbHGrtAREw4j7DiLEMJ7RVscKQhGl2RVoKGQWjGOYUfdSHCIrAiJEKfcysVkSt7K7LBwNpuwJdcH62I4tai8jSgOO4vsjzw5H4nX6rW1RYlt8wYqAL8uctnh9IssxziiCIAieOxO9t*PHBr4WLEINZTtttZWaLelfPpyvjJIfefK5OE1VLVPBZz7st3oTXsFopuYghGW+HgpG+2vtkltLgyKdYS4OlICQDr+oU50R9+QcQMAKBOVFmvX5dlnLsdfDdvp3pbqFG43LoyRNynejbMBI7gfgabrnOvsdL6+G0txkY67NsHfalpoyNe2L7up4uhNX+ODsmRFVf2mwRumYh+j1Zh6Xm9bKtNsHqvEqiMjy4TnwL9JVzSUV*p8iYv12MS84uqPaDu9*kB5ebbNRse*ft2Dyu*C2*8k2HSAfBzEtLkuT5u2GfA5P*WlTZ00xtp9rXOEPPucew7d9*du6Nd+sv7tH9DeLXIvmXYRw7ZW1cXyNZuNTbOMokdyPsxrvDTBru9nWxbRgrLN64Xl4LFTweP7qgzCGLC3Ju1zKOSJFFoAtIUbWG1XFc*Om3pnq6mrwVnkPK1M8h2GRnRBk8l2DED+T+UBGVofR2yyZFuYA0bX25lNKF1Dq6UcvSZZC9zxRQ28f2cvD4G1BLAQIUAxQAAAgIAJ1YJFvbY3L*UAQAAG0HAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHgEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254700063119',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '1070MD',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
