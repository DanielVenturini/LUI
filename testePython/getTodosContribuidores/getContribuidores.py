import json
import requests
import time

file = open('ambosV2.json', 'r')
dataGit = json.load(file)
file.close()

# print(json.dumps(dataGit, indent=4))
# https://api.github.com/repos/freeCodeCamp/freeCodeCamp/contributors?per_page=100&page=3


def requisicaoGit(url):
    # req = requests.get(url, timeout = 3).json()
    # print(req)
    # return  
    tent = 10
    while(True):
        time.sleep(1)
        req = requests.get(url, timeout = 3).json()
        

        if(req['message']):
            if(tent < 0 ):
                print('dormindo: 60 seg')
                time.sleep(60)
                tent = 10    
            else:
                print('dormindo')
                tent -= 1
                time.sleep(2)
        
        else:
            return req
        
           

# print(dataGit[0]['contributors_url'])

qtdPages = int(dataGit[0]['contribuidores'].replace(',','')) / 100
for page in range(int(qtdPages)):
    data = requisicaoGit( dataGit[0]['contributors_url'] + '?per_page=100&page='+ str(page))
    # print('\n\n',page,':')
    print(data)

contibuidores = []

for cont in data:
    contibuidores.append(cont['id'])

# print(data)
