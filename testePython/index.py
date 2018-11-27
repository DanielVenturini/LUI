import json
linguagens = []
estrela = json.loads(open('Estrela.json').read())
forks = json.loads(open('Forks.json').read())
    
###################################################################################################################
file = open('soStars.Json', 'r')
a1 = json.load(file)
file.close()

file = open('ambosJson.json', 'r')
a2 = json.load(file)
file.close()

file = open('soForks.json', 'r')
a3 = json.load(file)
file.close()

for proj in a1:
    linguagens.append(proj['language'])

for proj in a2:
    linguagens.append(proj['language'])

for proj in a3:
    linguagens.append(proj['language'])

nomesLinguagens = set(linguagens)
saida = []
gambis = []

for lin in nomesLinguagens:
    saida.append( [lin , linguagens.count(lin)])
    gambis.append(linguagens.count(lin))

gambis.sort()
gambis.reverse()

aux = 0 
for lin in gambis:
    print('\n',lin)
    aux = aux + lin
print("***********",aux)

i = 0 
for lin in saida:
    print(lin[0] + ';' + str(lin[1]))
    i += 1



################################################################################################################



# idFork = []
# idStar = []

# for proj in estrela:
#     idStar.append(int(proj['id']))
    
# for proj in forks:
#     idFork.append(int(proj['id']))

# idFork = set(idFork)
# idStar = set(idStar)

# ambos = idFork & idStar
# soForks = idFork - idStar
# soStars = idStar - idFork

# print(ambos.__len__())
# print(soForks.__len__())
# print(soStars.__len__())

# i = 0 
# ambosJson = []
# soForksJson = []
# soStarsJson = []

# while( i < 1000):
    
#     if(ambos.__contains__(estrela[i]['id'])):
#         ambosJson.append(estrela[i])

#     elif(soStars.__contains__(estrela[i]['id'])):
#         soStarsJson.append(estrela[i])
        
#     if(soForks.__contains__(forks[i]['id'])):
#         soForksJson.append(forks[i])

#     i += 1

# file = open('ambosJson.json','w')
# json.dump(ambosJson, file)
# file.close()

# file = open('soStars.Json', 'w')
# json.dump(soStarsJson, file)
# file.close()

# file = open('soForks.json', 'w')
# json.dump(soForksJson, file)
# file.close()

# print(ambosJson.__len__(),soForksJson.__len__(),soStarsJson.__len__())


