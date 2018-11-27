import json
import urllib
import urllib.request
import threading
from bs4 import BeautifulSoup


def requisicaoGitHub(url):
	try:
		thepage = urllib.request.urlopen(url)
		soupdata = BeautifulSoup(thepage, "html.parser")
		return soupdata
	except:
		return requisicaoGitHub(url)

def dadosGit(full_name,tent = 3):
	soup = requisicaoGitHub('https://github.com/' + full_name)
	data = soup.findAll("span", class_="num text-emphasized")   
	
	if(not data[3].text.strip() and tent <= 0):
		dadosGit(full_name,tent - 1)
	
	return data[3].text.strip()

file = open('ambosJson.json', 'r')
dataGit = json.load(file)
file.close()

# ret = dadosGit(dataGit[395]['full_name'])

# print(ret)
# print(json.dumps(dataGit[0], indent=4))


def worker(Thread,nunThreads):
    intevalo = int(dataGit.__len__() / nunThreads)
    inicio = Thread * intevalo
    fim = inicio + intevalo
    for i in range(inicio,fim):
        print(i,';',dataGit[i]['full_name'],';', dadosGit(dataGit[i]['full_name']))
    

threads = []

nunThreads = 2
for i in range(nunThreads):
    t = threading.Thread(target=worker, args={i, nunThreads})
    threads.append(t)
    t.start()