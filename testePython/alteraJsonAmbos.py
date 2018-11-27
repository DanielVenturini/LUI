import json
import csv

file = open('contributors.csv', 'r')
ct = csv.reader(file,delimiter=';',quotechar='\n')

contribudor = []
    
try:
    i=0
    while(True):
        contribudor.append(ct.__next__())

except:

    file.close()

    file = open('ambosJson.json', 'r')
    dataGit = json.load(file)
    file.close()

    for i in range(len(dataGit) - 1):
        if('torvalds/linux' in dataGit[i]['full_name']  ):
            dataGit.pop(i)
            
    for pro in dataGit:
        for proj2 in contribudor:
            if(pro['full_name'] == proj2[0].strip() ):
                # print(proj2[0].strip(), proj2[1].strip())
                pro['contribuidores'] = proj2[1].strip()
    
    for pro in dataGit:
        print(pro['contribuidores'])
        
    json.dump(dataGit,open('ambosV2.json', 'w'))
    
    # print(contribudor)




    # for rep 
