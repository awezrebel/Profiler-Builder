import twilio
import random
from twilio.rest import Client 
otp = random.randint(1000, 9999)
f = open( 'otp.txt', 'w' )
f.write(str(otp))
print(otp)
account_sid = 'ACcfdb2af6df861a91e8e2d2b5ed9105f2' 
auth_token = 'f6df49c5f8da5b8027d903906402a986' 
client= Client(account_sid, auth_token) 
message = client.messages.create( 
body='Your OTP is-' + str(otp), 
from_='+18646614447', 
to = '+916303731463' 
)

print(message.sid) 
