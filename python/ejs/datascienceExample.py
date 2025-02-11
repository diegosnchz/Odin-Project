import pandas as pd
import matplotlib.pyplot as plt

data = {'Year': [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        'Sales': [100, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255]}

df = pd.DataFrame(data)

print(df)

plt.plot(df['Year'], df['Sales'])
plt.xlabel('Year')
plt.ylabel('Sales')
plt.title('Sales Trend Over Years')
plt.grid(True)
plt.show()