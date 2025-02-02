import { digitSum, isArmstrong, isPerfect, isPrime } from "../src/lib/utils.js";
import axios from "axios";

export const classifyNumber = async (req, res) => {
  const numberParam = req.query.number;

  if (numberParam === undefined) {
    return res.status(400).json({ number: undefined, error: true });
  }

  const num = Number(numberParam);
  if (!Number.isInteger(num)) {
    return res.status(400).json({ number: numberParam, error: true });
  }

  const number = num;

  const prime = isPrime(number);
  const perfect = isPerfect(number);
  const armstrong = isArmstrong(number);
  const evenOdd = number % 2 === 0 ? "even" : "odd";
  const properties = [];
  if (armstrong) {
    properties.push("armstrong");
  }
  properties.push(evenOdd);
  const digitSumVal = digitSum(number);

  let funFact;
  try {
    const response = await axios.get(
      `http://numbersapi.com/${number}/math?json`
    );
    funFact = response.data.text;
  } catch (err) {
    funFact = "No fun fact available.";
  }

  res.json({
    number: number,
    is_prime: prime,
    is_perfect: perfect,
    properties: properties,
    digit_sum: digitSumVal,
    fun_fact: funFact,
  });
};
