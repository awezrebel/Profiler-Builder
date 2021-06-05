import twilio
import random
from twilio.rest import Client 
account_sid = 'ACcfdb2af6df861a91e8e2d2b5ed9105f2' 
auth_token = 'cf9a65f1bcf82e075d144076579ee2cc' 
client= Client(account_sid, auth_token) 
message = client.messages.create( 
body='  Profile Builder -- You have Successfully changed your Password..if this is not done by you..please click this link and reset immidiately  -  ' + 'https://awezrebel.github.io/Profiler-Builder/userpasschange.html' , 
from_='+18646614447', 
to = '+916303731463' 
)

print("sms sent succesfully , message id -- " + message.sid) 
