# How does ontecha work

### Essentially the user input is enter is create a new plan. This has the following format: uploadFrequency, batchSize, contentFrequency, startDate, endDate, uploadPlatform, designColor
Based on this input a plan object is generated. A plan object is has the following design: startDate, endDate, contentDays[], batchDays[], platform, color.