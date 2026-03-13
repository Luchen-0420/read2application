import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Cleaning up database...');
  // Delete in order of dependencies
  await prisma.methodologyTag.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.methodology.deleteMany();
  await prisma.book.deleteMany();
  await prisma.plan.deleteMany();

  console.log('Start seeding...');

  // Create Book 1: 小狗钱钱
  const book1 = await prisma.book.create({
    data: {
      title: '小狗钱钱',
      author: '博多·舍费尔',
      coverUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
      summary: '一本关于理财童话的经典书籍，通过小狗钱钱的视角讲述基础财富法则。',
      methodologies: {
        create: [
          {
            name: '梦想储蓄罐',
            description: '将抽象的渴望具体化，通过视觉和实际行动强化存钱动力',
            applicableScenarios: '想存钱但缺乏动力，容易冲动消费时',
            steps: [
              { order: 1, content: '列出你想实现的10个愿望' },
              { order: 2, content: '从中选出对你来说最重要的3个愿望' },
              { order: 3, content: '为这3个愿望准备梦想相册和梦想储蓄罐' },
              { order: 4, content: '每天看一遍相册，想象愿望实现的样子' }
            ],
            tags: {
              create: [
                { tag: { connectOrCreate: { where: { name: '理财' }, create: { name: '理财' } } } },
                { tag: { connectOrCreate: { where: { name: '目标管理' }, create: { name: '目标管理' } } } },
                { tag: { connectOrCreate: { where: { name: '开源节流' }, create: { name: '开源节流' } } } }
              ]
            }
          },
          {
            name: '写成功日记',
            description: '记录每天做成功的5件事，不管多小，用来建立自信',
            applicableScenarios: '遇到挫折、自我怀疑或犹豫不决时',
            steps: [
              { order: 1, content: '准备一个专门的日记本' },
              { order: 2, content: '每天记录至少5件自己做成功的事情' },
              { order: 3, content: '遇到困难时翻看成功日记' }
            ],
            tags: {
              create: [
                { tag: { connectOrCreate: { where: { name: '自信建立' }, create: { name: '自信建立' } } } },
                { tag: { connectOrCreate: { where: { name: '心理建设' }, create: { name: '心理建设' } } } }
              ]
            }
          }
        ]
      }
    }
  });

  // Create Book 2: 原子习惯
  const book2 = await prisma.book.create({
    data: {
      title: '原子习惯',
      author: '詹姆斯·克利尔',
      coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80',
      summary: '揭示细微改变如何带来巨大差异，提供建立好习惯和打破坏习惯的实用框架。',
      methodologies: {
        create: [
          {
            name: '习惯叠加',
            description: '将想要养成的新习惯与当前已经根深蒂固的日常习惯绑定',
            applicableScenarios: '总是忘记做某项新计划时，如想要每天看书但总想不起来',
            steps: [
              { order: 1, content: '列出你每天一定会做的日常习惯（如刷牙、喝早间咖啡）' },
              { order: 2, content: '选择一个你想养成的新习惯' },
              { order: 3, content: '写下公式："继 [当前习惯] 之后，我将执行 [新习惯]"' },
              { order: 4, content: '开始执行并随着时间调整难度' }
            ],
            tags: {
              create: [
                { tag: { connectOrCreate: { where: { name: '习惯养成' }, create: { name: '习惯养成' } } } },
                { tag: { connectOrCreate: { where: { name: '时间管理' }, create: { name: '时间管理' } } } }
              ]
            }
          },
          {
            name: '两分钟法则',
            description: '当开始一项新习惯时，它所需要的时间不应超过两分钟。',
            applicableScenarios: '感到目标太大、无从下手，或者习惯拖延时。',
            steps: [
              { order: 1, content: '挑选一个你一直想做但拖延的任务' },
              { order: 2, content: '把这个任务缩减到一个能在两分钟内完成的微小版本（如：从"跑5公里"变成"系好跑鞋鞋带"）' },
              { order: 3, content: '每天只做这两分钟，直到这个微小动作成为自然本能' }
            ],
            tags: {
              create: [
                { tag: { connectOrCreate: { where: { name: '克服拖延' }, create: { name: '克服拖延' } } } },
                { tag: { connectOrCreate: { where: { name: '行动力' }, create: { name: '行动力' } } } }
              ]
            }
          }
        ]
      }
    }
  });

  // Create Book 3: 富爸爸穷爸爸
  const book3 = await prisma.book.create({
    data: {
      title: '富爸爸穷爸爸',
      author: '罗伯特·清崎',
      coverUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      summary: '讲述了两个爸爸的财富观，显示了资产与负债的不同，提供了实现财务自由的思维框架。',
      methodologies: {
        create: [
          {
            name: '区分资产与负债',
            description: '资产是将钱放入你口袋的东西，而负债是将钱从你口袋中拿走的东西。',
            applicableScenarios: '希望通过投资实现财务自由，分不清消费和投资时。',
            steps: [
              { order: 1, content: '列出你所有的月度支出' },
              { order: 2, content: '识别哪些是能产生现金流的资产（如股票、租金房产）' },
              { order: 3, content: '优先减少负债，并将收入投入到资产项中' }
            ],
            tags: {
              create: [
                { tag: { connectOrCreate: { where: { name: '财务自由' }, create: { name: '财务自由' } } } },
                { tag: { connectOrCreate: { where: { name: '投资理财' }, create: { name: '投资理财' } } } }
              ]
            }
          }
        ]
      }
    }
  });

  console.log(`Seeding finished. Added books: ${book1.title}, ${book2.title}, ${book3.title}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: any) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
