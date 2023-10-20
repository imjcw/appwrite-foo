import { Client, Databases } from 'node-appwrite';

/**
 * 随机时间
 */
const randomTime = () => {
  const hours = Math.floor(Math.random() * 12) + 1;
  const minutes = Math.floor(Math.random() * 30) + 1;
  return `${hours.toString().padStart(2, '0')}${minutes.toString().padStart(2, '0')}`;
}

/**
 * 获取下个月第一天的时间戳
 */
const getNextMonthFirstDayTimestamp = () => {
  const now = new Date();
  const nextMonth = now.getMonth() + 1;
  const nextYear = now.getFullYear();
  const firstDayOfNextMonth = new Date(nextYear, nextMonth - 1, 1);
  return firstDayOfNextMonth.getTime();
}

/**
 * 生成时间关系
 * @returns array
 */
const genTimesRelations = () => {
  let relations = [];
  for (let index = 1; index < 32; index++) {
    relations[index] = parseInt(randomTime())
  }
  return relations
};

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  return res.json(genTimesRelations());
};
