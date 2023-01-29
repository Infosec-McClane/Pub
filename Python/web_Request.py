import sys
import requests

def http_session(host):
	target = "https://%s/" % host
	data = {
         "form_password" : "password",
         "form_login": "teacher",
         "submit": "Login",
     }
	session = requests.Session() # for session handling if multiple steps are needed
	response = session.post(target, data) # make a post requests
	
	# print(response.request.url)
	# print(response.request.body)
	# print(response.request.headers)
	
	resp_status = response.status_code
	resp_body = response.text # Response body as text
	print(resp_status)
	print(resp_body)

def main():
	if len(sys.argv) != 2:
		print("usage: %s <target>" % sys.argv[0])
		sys.exit(-1)
	host = sys.argv[1]
	http_session(host)
	
if __name__ == "__main__":
     main()

