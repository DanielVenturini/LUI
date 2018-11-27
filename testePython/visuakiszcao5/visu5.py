import json
from dta import data

file = open('ambosV2.json', 'r')
dataGit = json.load(file)
file.close()

VD = {}

for proj in data:
    lice = proj[4]
    pClos = int(proj[1].replace(',',''))
    pOpen = int(proj[2].replace(',', ''))
    if(not lice in VD):
        VD[proj[4]] = [pClos, pOpen, 1]
    else:
        clos = VD[proj[4]][0]
        op = VD[proj[4]][1]
        n = VD[proj[4]][2]
        
        del VD[proj[4]]
        VD[proj[4]] = [clos + pClos, op + pOpen, n+1]
        

for d in VD:
    print('[',d,',',VD[d][0],',', VD[d][1],',', VD[d][2],'],')
