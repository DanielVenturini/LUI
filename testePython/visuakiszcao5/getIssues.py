import json
import urllib
import urllib.request
import threading
from bs4 import BeautifulSoup
import time

def requisicaoGitHub(url):
	try:
		thepage = urllib.request.urlopen(url)
		soupdata = BeautifulSoup(thepage, "html.parser")
		return soupdata
	except:
		return requisicaoGitHub(url)

def dadosGit(full_name,tent=10):
    soup = requisicaoGitHub('https://github.com/' + full_name + '/issues')
    close = soup.find('a', class_='btn-link ').text
    openIssues = soup.find('a', class_='btn-link selected').text
    data1 = close.strip().split(' ')[0].replace(',','')
    data2 = openIssues.strip().split(' ')[0]

    if(tent <= 0):
            return '' ''
    if(not close.strip().split(' ')[0].replace(',', '') and not openIssues.strip().split(' ')[0]):		
        time.sleep(1)
        print('--->' + full_name +': ',tent)
        dadosGit(full_name, tent - 1)
    else:
        return data1,data2


file = open('ambosV2.json', 'r')
dataGit = json.load(file)
file.close()

# dadosGit(dataGit[0]['full_name'])
v5 = []


def worker(Thread, nunThreads):
    intevalo = int(dataGit.__len__() / nunThreads)
    inicio = Thread * intevalo
    fim = inicio + intevalo
    for i in range(inicio, fim):
        close, op = dadosGit(dataGit[i]['full_name'])
        data = [dataGit[i]['full_name'].split('/')[1], close, op, dataGit[i]['language'], dataGit[i]['license']]
        v5.insert( i, data)
        print(str(data) + ',')
        if(i >= 610):
            print(v5)
        # print(i, ';', dataGit[i]['full_name'], ';',dadosGit(dataGit[i]['full_name']))


threads = []

nunThreads = 2
for i in range(nunThreads):
    t = threading.Thread(target=worker, args={i, nunThreads})
    threads.append(t)
    t.start()



