
from telnetlib import STATUS
from tkinter import UNITS
import pandas as pd 
df= pd.read_csv(exercise.csv).dropna()

#Supprimer la suppressed colonne
df= df.drop(columns=[suppressed])

#Supprimer la stautus colonne
df= df.drop(columns=[STATUS])

#Supprimer la series_reference colonne
df= df.drop(columns=[series_reference])

#Supprimer la units colonne
df= df.drop(columns=[UNITS])

df.to_csv(result.csv,index=False)




