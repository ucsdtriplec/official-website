---
title: 'Stock - Bull or Bear'

team:
  - Yifei Ning
  - Xinhan Qin
  - Lin Che-Wei
---

## Introduction

Sentiment analysis is at the core of predicting stock performance, as most of the investors, without any inside information, relies on public sentiment in order to make decisions. Therefore, gaining an in-depth understanding of how people react to financial news is crucial to predicting stock market. In this project, we are interested in analyzing text from stock news originating from Twitter. We will attempt to do this using the BERT model, which has achieved State-of-the-Art performance in many tasks. Therefore, we also expect to see a very promising results.

## Methodology

We will first preprocess the data by tokenizing each news into a list of token. Currently, there’s a popular package called hugging face that provides various tokenizing functions that will be useful to us. Then we will embed the text, which will serve as the input of BERT. Last but not least, we will use the pre-trained BERT to do transfer learning on this preprocessed dataset. This task will be a binary classification task. The results is either positive (+1) or negative (-1).

## Dataset Link

https://www.kaggle.com/yash612/stockmarket-sentiment-dataset
https://www.kaggle.com/geminikeggler/stock-sentiment-analysis-classification-nlp/comments#data



