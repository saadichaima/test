import os 
from random import randint
 
for j in range(0,5):
        d= str(j)+'days ago'
        with open('file.txt','a') as file :
            file.write(d)
        os.system('git add .')
        os .system('git commit --date="2022-12-04" -m "commit"')

os.system('git push -u origin main')