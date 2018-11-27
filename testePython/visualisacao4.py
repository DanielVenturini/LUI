import json
file = open('ambosV2.json', 'r')
dataGit = json.load(file)
file.close()

# print(json.dumps(dataGit, indent=4))
print('[')
print('[', '"forks",', '"star",', '"contribuidores",','"license",', '"pulls",', '"Repositorio"', '],')
i = 0
for proj in dataGit:
    print('[', proj["forks"], ',', proj["stargazers_count"], ',', proj["contribuidores"].replace(',',''),
          ',', '"' + proj["license"].replace('"',"'") + '"', ',', proj["pulls"], ',', '"'+str(proj['full_name'].split('/')[1]) + '"',  '],')
    i += 1

print(']')
