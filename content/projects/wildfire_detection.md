---
title: "Wildfire Detection"
description: An image classification pipeline that predicts whether a wildfire event occurs in the image.
team:
  - Binghong Yu
  - Yuxuan Fan
  - Shenghan Liu
  - Ruojia Tao
  - Wenbo Hu
  - Jerry Chan
---

## Project Description

In recent years, wildfire has become a significant issue in California, causing enormous damage to the residents and the environment. To prevent the widespread of wildfires, applying machine learning algorithms to detect and forecast wildfires is a feasible path. This project will acquire video captures from surveillance cameras, detect the source of smoke and fire using machine learning algorithms, and send back the result to a wildfire detection network for further reactions and analysis.

## Dataset

The dataset is collected by the High-Performance Wireless Research & Education Network ([HPWREN](http://hpwren.ucsd.edu/)) of UCSD and labeled by the SDSC researchers. HPWREN cameras are installed in remote locations to surveillance areas that are not well-covered by other technologies. The dataset contains screenshots from video snippets of wildfire events. The images are labeled positive or negative, depending on whether the screenshots contain fire or smoke.

### Data Example

| Positive                                                                | Negative                                                                |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| <img width="" height="300" alt="positive-data" src="/wild_fire_train1.jpg"> | <img width="" height="300" alt="negative-data" src="/wild_fire_train0.jpg"> |
