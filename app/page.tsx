'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Cpu,
  Database,
  Factory,
  GitBranch,
  GraduationCap,
  Layers3,
  LineChart,
  Mail,
  MapPin,
  Maximize2,
  Network,
  Sparkles,
  Wrench,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

type Language = 'zh' | 'en';

const copy = {
  zh: {
    nav: [
      ['about', '关于'],
      ['research', '研究'],
      ['publications', '论文'],
      ['experience', '经历'],
      ['projects', '项目'],
    ],
    eyebrow: '博士研究生 · AI 研究者 · 算法工程师 / FDE',
    name: '王若楠',
    latinName: 'Ruonan Wang',
    role: '中国人民大学 · 计算机科学与技术博士研究生',
    intro:
      '研究大语言模型智能体、智能体记忆与持续学习、自主规划与工具调用，同时关注机器学习与人工智能在真实行业中的可靠落地。',
    location: '北京，中国',
    email: '邮件联系',
    publicationsButton: '查看论文',
    metrics: [
      ['TMLR', '论文已接收'],
      ['2', '篇 KDD 在投'],
      ['6+', '项 AI 项目实践'],
    ],
    researchLabel: 'Research agenda',
    researchTitle: '从会回答的模型，到能持续工作的智能体',
    researchIntro:
      '我的研究关注智能体如何形成可积累的记忆、在长程任务中规划与行动，并把研究原型转化为可验证、可部署的系统。',
    research: [
      {
        icon: BrainCircuit,
        title: 'LLM Agents',
        body: '面向长程任务的自主规划、工具调用、反馈学习与可靠执行。',
      },
      {
        icon: Network,
        title: 'Agent Memory',
        body: '研究情景记忆、语义记忆及持续学习中的检索、压缩与更新机制。',
      },
      {
        icon: Wrench,
        title: 'Applied AI',
        body: '将机器学习、大模型与组合优化应用于工业制造、知识服务和决策系统。',
      },
    ],
    publicationsLabel: 'Selected publications',
    publicationsTitle: '代表性论文',
    publications: [
      {
        venue: 'TMLR · Accepted May 2026',
        title:
          'Domain Weight Randomization with Bayesian Updating for LLM Pretraining',
        role: '第一作者',
        summary:
          '以 Dirichlet 分布随机建模预训练数据领域权重，推导主模型与代理模型之间的 Scaling Law，并实现领域权重的贝叶斯更新与迁移。',
        image: '/images/domain-weight-pipeline.png',
        imageAlt: '论文方法流程：领域权重先验采样、代理模型贝叶斯更新、分布缩放与主模型训练',
        link: 'https://openreview.net/forum?id=tc8TyD7ZyD',
        linkLabel: '查看论文',
      },
      {
        venue: 'KDD · Under Review',
        title: 'Semantically Calibrated On-Policy Distillation',
        role: '第一作者',
        summary:
          '提出 SCOPE，通过 Register Calibration 与 Semantic Transport 缩小教师监督和学生生成分布之间的风格及语义差距。',
      },
      {
        venue: 'KDD · Under Review',
        title:
          'Structure-Navigated Adaptive Personalization of Large Language Models',
        role: '共同第一作者（署名第二）',
        summary:
          '提出 SNAP，根据用户相关性定位功能子网络，并在 Retain、LoRA 与 Full Fine-tuning 之间自适应分配更新强度。',
      },
    ],
    experienceLabel: 'Education & experience',
    experienceTitle: '研究训练与工程实践并行',
    educationTitle: '教育背景',
    workTitle: '研究与实习',
    education: [
      {
        period: '2026.09 — 至今',
        place: '中国人民大学',
        role: '计算机科学与技术 · 博士研究生',
        detail: '信息学院 · LLM Agents、Agent Memory、机器学习与人工智能应用',
      },
      {
        period: '2023.09 — 2026.06',
        place: '东北师范大学',
        role: '统计学 · 硕士',
        detail: '研究方向：机器学习、大维随机矩阵',
      },
      {
        period: '2019.09 — 2023.06',
        place: '东北师范大学',
        role: '统计学 · 本科',
        detail: 'GPA 4.21/5 · 年级排名 3/53',
      },
    ],
    work: [
      {
        period: '2025.10 — 2026.08',
        place: '中国科学院软件研究所',
        role: '算法工程师 / FDE',
        detail:
          '负责模型融合、RAG、知识图谱、工业机器学习与组合优化；覆盖需求调研、方案设计、模型开发、系统联调与项目交付。',
      },
      {
        period: '2024.09 — 2025.09',
        place: '北京大学',
        role: '科研助理',
        detail:
          '围绕 Scaling Law、预训练数据领域权重优化与 Data-centric AI 开展研究，形成一篇 TMLR 第一作者论文。',
      },
    ],
    projectsLabel: 'Selected projects',
    projectsTitle: '把算法送进真实工作流',
    projectsIntro:
      '精选已经完成开发、验证或上线的项目，覆盖 Agent 产品、大模型系统和工业智能。',
    projects: [
      {
        icon: Bot,
        type: '独立项目 · Agent Engineering',
        title: 'Relay 经侦智能任务台',
        body: '基于 Electron、React 与 TypeScript 构建本地 LLM Agent 桌面产品；设计资金关系图 Skill、证据只读策略、图谱校验与可视化，完成 5 万笔流水压力测试及 Windows 交付。',
        tags: ['Electron', 'LLM Agent', 'Graph', 'Local-first'],
        image: '/images/relay-workbench.png',
        imageAlt: 'Relay 经侦智能任务台桌面端界面',
        imageCaption: '产品界面预览',
      },
      {
        icon: GitBranch,
        type: '模型研发',
        title: '大语言模型融合优化',
        body: '基于 DARE-TIES 处理模型参数增量，使用遗传算法联合搜索融合权重与保留密度；Qwen2.5-7B 融合模型在 C-Eval 上较单一微调模型提升约 10%。',
        tags: ['DARE-TIES', 'Genetic Algorithm', 'Qwen'],
      },
      {
        icon: Cpu,
        type: '工业智能 · 半导体',
        title: '半导体工艺优化与企业知识库',
        body: '以 LightGBM、Focal Loss 和约束搜索实现倒装焊压力推荐，准确率约 84%；另以 FAISS、BM25、RRF 与 BGE-Reranker 构建 9k+ chunks 的企业 RAG。',
        tags: ['LightGBM', 'RAG', 'Rerank', 'Docker'],
        image: '/images/semiconductor-pressure-risk-curve.png',
        imageAlt: '倒装焊压力风险曲线与推荐压力区间',
        imageCaption: '倒装焊压力推荐结果',
      },
      {
        icon: Database,
        type: '生产模型上线 · 光纤制造',
        title: '光纤参数继承预测系统',
        body: '构建规则引擎、HistGradientBoosting 与 CatBoost 混合流水线，完成批处理调度、REST 接口与 MES 回写，核心参数达到相对误差 ≤1%、准确率 >95%。',
        tags: ['CatBoost', 'Rules + ML', 'MES', 'REST'],
        image: '/images/optical-fiber-inheritance-dashboard.png',
        imageAlt: '光纤参数继承预测准确率与偏差超标率看板',
        imageCaption: '模型评估看板',
      },
      {
        icon: Factory,
        type: '组合优化 · 智能工厂',
        title: '硅棒质量预测与生产排程',
        body: '完成百余维工艺特征工程与多目标回归，并实现毛棒划线、立库双棒匹配及两阶段调度引擎，通过 FastAPI 对接 MES 工作流。',
        tags: ['Scheduling', 'Optimization', 'FastAPI', 'MES'],
        image: '/images/silicon-oxygen-prediction-curves.jpg',
        imageAlt: '多根硅棒沿晶体长度的氧含量分布预测曲线',
        imageCaption: '硅棒氧含量预测曲线',
      },
      {
        icon: LineChart,
        type: '时序建模 · 能源',
        title: '能源价格预测与报价优化',
        body: '融合 VMD、ARIMA、GRU-Attention、傅里叶周期分析和残差蒙特卡洛，构建煤炭与电力价格趋势预测、不确定性区间及 D-4 三层报价研究框架。',
        tags: ['Time Series', 'Probabilistic Forecasting', 'VMD'],
        image: '/images/power-market-bidding-platform.png',
        imageAlt: '广东电力市场智能报价平台统计、预测与报价助手模块',
        imageCaption: '电力智能报价平台功能总览',
      },
    ],
    footerTitle: '研究问题或工程合作，欢迎联系。',
    footerBody:
      '我对 Agent Memory、长程智能体、基础模型训练，以及 AI 在复杂行业工作流中的应用保持开放交流。',
    footerEmail: '发送邮件',
    footerNote: 'Designed and built around research, systems and real-world impact.',
    status: '目前关注',
    statusText: 'Agent Memory · Long-horizon Agents · Applied AI',
  },
  en: {
    nav: [
      ['about', 'About'],
      ['research', 'Research'],
      ['publications', 'Publications'],
      ['experience', 'Experience'],
      ['projects', 'Projects'],
    ],
    eyebrow: 'Ph.D. Student · AI Researcher · Algorithm Engineer / FDE',
    name: 'Ruonan Wang',
    latinName: '王若楠',
    role: 'Ph.D. Student in Computer Science, Renmin University of China',
    intro:
      'I study LLM agents, agent memory and continual learning, autonomous planning and tool use, with a parallel focus on deploying reliable machine learning and AI systems in real-world domains.',
    location: 'Beijing, China',
    email: 'Email me',
    publicationsButton: 'View publications',
    metrics: [
      ['TMLR', 'paper accepted'],
      ['2', 'KDD submissions'],
      ['6+', 'applied AI projects'],
    ],
    researchLabel: 'Research agenda',
    researchTitle: 'From models that answer to agents that keep working',
    researchIntro:
      'My research asks how agents can build durable memory, plan and act over long horizons, and evolve from research prototypes into verifiable, deployable systems.',
    research: [
      {
        icon: BrainCircuit,
        title: 'LLM Agents',
        body: 'Autonomous planning, tool use, feedback learning and reliable execution for long-horizon tasks.',
      },
      {
        icon: Network,
        title: 'Agent Memory',
        body: 'Retrieval, compression and updating mechanisms for episodic, semantic and continual memory.',
      },
      {
        icon: Wrench,
        title: 'Applied AI',
        body: 'Machine learning, foundation models and optimization for manufacturing, knowledge systems and decision support.',
      },
    ],
    publicationsLabel: 'Selected publications',
    publicationsTitle: 'Research highlights',
    publications: [
      {
        venue: 'TMLR · Accepted May 2026',
        title:
          'Domain Weight Randomization with Bayesian Updating for LLM Pretraining',
        role: 'First author',
        summary:
          'Models pretraining domain weights with a Dirichlet distribution, derives a cross-scale law between proxy and target models, and enables Bayesian weight transfer.',
        image: '/images/domain-weight-pipeline.png',
        imageAlt:
          'Paper pipeline for prior domain-weight sampling, proxy-model Bayesian updating, distribution scaling and main-model training',
        link: 'https://openreview.net/forum?id=tc8TyD7ZyD',
        linkLabel: 'View paper',
      },
      {
        venue: 'KDD · Under Review',
        title: 'Semantically Calibrated On-Policy Distillation',
        role: 'First author',
        summary:
          'Introduces SCOPE, combining Register Calibration and Semantic Transport to align teacher supervision with an evolving student in both style and meaning.',
      },
      {
        venue: 'KDD · Under Review',
        title:
          'Structure-Navigated Adaptive Personalization of Large Language Models',
        role: 'Co-first author (second-listed)',
        summary:
          'Introduces SNAP, locating user-relevant functional subnetworks and assigning Retain, LoRA or Full updates according to structural relevance.',
      },
    ],
    experienceLabel: 'Education & experience',
    experienceTitle: 'Research training meets engineering practice',
    educationTitle: 'Education',
    workTitle: 'Research & practice',
    education: [
      {
        period: 'Sep 2026 — Present',
        place: 'Renmin University of China',
        role: 'Ph.D. in Computer Science and Technology',
        detail:
          'School of Information · LLM Agents, Agent Memory, Machine Learning and Applied AI',
      },
      {
        period: 'Sep 2023 — Jun 2026',
        place: 'Northeast Normal University',
        role: 'M.S. in Statistics',
        detail: 'Machine learning and high-dimensional random matrices',
      },
      {
        period: 'Sep 2019 — Jun 2023',
        place: 'Northeast Normal University',
        role: 'B.S. in Statistics',
        detail: 'GPA 4.21/5 · Ranked 3/53',
      },
    ],
    work: [
      {
        period: 'Oct 2025 — Aug 2026',
        place: 'Institute of Software, Chinese Academy of Sciences',
        role: 'Algorithm Engineer / Forward Deployed Engineer',
        detail:
          'Building model-merging, RAG, knowledge-graph, industrial ML and optimization systems—from field discovery and solution design to integration and delivery.',
      },
      {
        period: 'Sep 2024 — Sep 2025',
        place: 'Peking University',
        role: 'Research Assistant',
        detail:
          'Research on scaling laws, domain-weight optimization for pretraining and data-centric AI, leading to a first-author TMLR paper.',
      },
    ],
    projectsLabel: 'Selected projects',
    projectsTitle: 'Algorithms embedded in real workflows',
    projectsIntro:
      'A selection of systems that reached implementation, validation or production across agent products, foundation models and industrial AI.',
    projects: [
      {
        icon: Bot,
        type: 'Independent · Agent Engineering',
        title: 'Relay: Investigation Intelligence Workbench',
        body: 'A local-first Electron, React and TypeScript desktop agent for non-technical investigators, featuring a fund-flow graph skill, read-only evidence policies, schema validation, visualization and stress tests over 50k transactions.',
        tags: ['Electron', 'LLM Agent', 'Graph', 'Local-first'],
        image: '/images/relay-workbench.png',
        imageAlt: 'Relay investigation intelligence workbench desktop interface',
        imageCaption: 'Product interface preview',
      },
      {
        icon: GitBranch,
        type: 'Foundation Model R&D',
        title: 'Large Language Model Merging',
        body: 'Applied DARE-TIES to model deltas and used a genetic algorithm to jointly search merge weights and retention density; the merged Qwen2.5-7B model improved C-Eval accuracy by roughly 10% over a single fine-tuned model.',
        tags: ['DARE-TIES', 'Genetic Algorithm', 'Qwen'],
      },
      {
        icon: Cpu,
        type: 'Industrial AI · Semiconductor',
        title: 'Process Optimization & Enterprise RAG',
        body: 'Built a LightGBM, Focal Loss and constrained-search pipeline for bonding-pressure recommendations at ~84% accuracy, plus a 9k+ chunk hybrid RAG stack using FAISS, BM25, RRF and BGE-Reranker.',
        tags: ['LightGBM', 'RAG', 'Rerank', 'Docker'],
        image: '/images/semiconductor-pressure-risk-curve.png',
        imageAlt: 'Flip-chip bonding pressure risk curves and recommended pressure interval',
        imageCaption: 'Bonding-pressure recommendation results',
      },
      {
        icon: Database,
        type: 'Production ML · Optical Fiber',
        title: 'Parameter Inheritance Prediction',
        body: 'Combined rules, HistGradientBoosting and CatBoost in a scheduled prediction service with REST and MES write-back, meeting ≤1% relative error and >95% accuracy targets for core parameters.',
        tags: ['CatBoost', 'Rules + ML', 'MES', 'REST'],
        image: '/images/optical-fiber-inheritance-dashboard.png',
        imageAlt: 'Optical-fiber parameter inheritance accuracy and deviation dashboard',
        imageCaption: 'Model evaluation dashboard',
      },
      {
        icon: Factory,
        type: 'Optimization · Smart Factory',
        title: 'Silicon Quality & Production Scheduling',
        body: 'Developed high-dimensional process features and multi-target regression, then implemented cutting, warehouse pairing and two-stage scheduling engines exposed through FastAPI for MES integration.',
        tags: ['Scheduling', 'Optimization', 'FastAPI', 'MES'],
        image: '/images/silicon-oxygen-prediction-curves.jpg',
        imageAlt: 'Predicted oxygen concentration curves along the length of multiple silicon ingots',
        imageCaption: 'Silicon oxygen concentration predictions',
      },
      {
        icon: LineChart,
        type: 'Time Series · Energy',
        title: 'Energy Price Forecasting & Bidding',
        body: 'Combined VMD, ARIMA, GRU-Attention, Fourier analysis and residual Monte Carlo for coal and electricity trends, uncertainty bands and a research framework for three-layer D-4 bidding decisions.',
        tags: ['Time Series', 'Probabilistic Forecasting', 'VMD'],
        image: '/images/power-market-bidding-platform.png',
        imageAlt: 'Guangdong power-market platform with analytics, forecasting and bidding assistant modules',
        imageCaption: 'Power-market bidding platform overview',
      },
    ],
    footerTitle: 'Open to research conversations and engineering collaborations.',
    footerBody:
      'I am interested in agent memory, long-horizon agents, foundation-model training and applying AI to complex real-world workflows.',
    footerEmail: 'Send an email',
    footerNote: 'Designed and built around research, systems and real-world impact.',
    status: 'Currently exploring',
    statusText: 'Agent Memory · Long-horizon Agents · Applied AI',
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>('zh');
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  return (
    <main id="about" className="min-h-screen overflow-x-hidden">
      <header className="site-header">
        <a className="wordmark" href="#about" aria-label="Ruonan Wang home">
          <span>RW</span>
          <i />
        </a>
        <nav aria-label="Primary navigation" className="desktop-nav">
          {t.nav.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="language-switch" aria-label="Language selector">
          <Button
            size="sm"
            variant={language === 'zh' ? 'default' : 'ghost'}
            onClick={() => setLanguage('zh')}
            aria-pressed={language === 'zh'}
          >
            中
          </Button>
          <Button
            size="sm"
            variant={language === 'en' ? 'default' : 'ghost'}
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
          >
            EN
          </Button>
        </div>
      </header>

      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <div className="name-block">
            <h1>{t.name}</h1>
            <span>{t.latinName}</span>
          </div>
          <p className="hero-role">{t.role}</p>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <Button
              className="primary-action"
              size="lg"
              nativeButton={false}
              render={<a href="#publications" />}
            >
              <BookOpen data-icon="inline-start" />
              {t.publicationsButton}
              <ArrowDownRight data-icon="inline-end" />
            </Button>
            <Button
              className="secondary-action"
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="mailto:wangrn117@ruc.edu.cn" />}
            >
              <Mail data-icon="inline-start" />
              {t.email}
            </Button>
          </div>
          <div className="hero-location">
            <MapPin />
            <span>{t.location}</span>
            <span className="dot" />
            <span>wangrn117@ruc.edu.cn</span>
          </div>
        </div>

        <div className="portrait-column">
          <div className="portrait-frame">
            <div className="portrait-accent" />
            <img
              src="/images/ruonan-wang.jpg"
              alt={language === 'zh' ? '王若楠肖像' : 'Portrait of Ruonan Wang'}
            />
            <div className="portrait-caption">
              <Sparkles />
              <div>
                <span>{t.status}</span>
                <strong>{t.statusText}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="metric-strip">
          {t.metrics.map(([value, label]) => (
            <div key={label} className="metric">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="research" className="research-section">
        <div className="page-shell section-grid">
          <div className="section-heading">
            <p className="section-kicker">{t.researchLabel}</p>
            <h2>
              {language === 'zh' ? (
                <>
                  <span className="research-title-line">从会回答的模型，</span>
                  <span className="research-title-line">到能持续工作的智能体</span>
                </>
              ) : (
                t.researchTitle
              )}
            </h2>
            <p>{t.researchIntro}</p>
          </div>
          <div className="research-grid">
            {t.research.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="research-card">
                  <CardHeader>
                    <div className="card-number">0{index + 1}</div>
                    <Icon className="research-icon" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.body}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="publications" className="publications-section page-shell">
        <div className="section-heading compact">
          <p className="section-kicker">{t.publicationsLabel}</p>
          <h2>{t.publicationsTitle}</h2>
        </div>
        <div className="publication-list">
          {t.publications.map((publication, index) => (
            <article key={publication.title} className="publication-row">
              <span className="publication-index">0{index + 1}</span>
              <div className="publication-copy">
                <div className="publication-meta">
                  <Badge variant={index === 0 ? 'default' : 'outline'}>
                    {publication.venue}
                  </Badge>
                  <span>{publication.role}</span>
                </div>
                <h3>{publication.title}</h3>
                <p>{publication.summary}</p>
                {'link' in publication && publication.link && (
                  <div className="publication-actions">
                    <Button
                      size="sm"
                      variant="outline"
                      nativeButton={false}
                      render={
                        <a
                          href={publication.link}
                          target="_blank"
                          rel="noreferrer"
                        />
                      }
                    >
                      {publication.linkLabel}
                      <ArrowUpRight data-icon="inline-end" />
                    </Button>
                  </div>
                )}
                {'image' in publication && (
                  <figure className="publication-figure">
                    {'link' in publication && publication.link ? (
                      <a
                        className="publication-figure-link"
                        href={publication.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${publication.title} paper link`}
                      >
                        <img src={publication.image} alt={publication.imageAlt} />
                        <span>
                          OpenReview
                          <ArrowUpRight />
                        </span>
                      </a>
                    ) : (
                      <img src={publication.image} alt={publication.imageAlt} />
                    )}
                  </figure>
                )}
              </div>
              {'link' in publication && publication.link ? (
                <a
                  className="publication-link"
                  href={publication.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${publication.title} paper link`}
                >
                  <ArrowUpRight className="publication-arrow" aria-hidden="true" />
                </a>
              ) : (
                <span />
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="page-shell">
          <div className="section-heading experience-heading">
            <p className="section-kicker">{t.experienceLabel}</p>
            <h2>{t.experienceTitle}</h2>
          </div>
          <div className="experience-columns">
            <div className="timeline-column">
              <div className="timeline-title">
                <GraduationCap />
                <h3>{t.educationTitle}</h3>
              </div>
              <div className="timeline-list">
                {t.education.map((item) => (
                  <article key={`${item.place}-${item.period}`} className="timeline-item">
                    <span className="timeline-dot" />
                    <p className="timeline-period">{item.period}</p>
                    <h4>{item.place}</h4>
                    <strong>{item.role}</strong>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="timeline-column">
              <div className="timeline-title">
                <BriefcaseBusiness />
                <h3>{t.workTitle}</h3>
              </div>
              <div className="timeline-list">
                {t.work.map((item) => (
                  <article key={`${item.place}-${item.period}`} className="timeline-item">
                    <span className="timeline-dot" />
                    <p className="timeline-period">{item.period}</p>
                    <h4>{item.place}</h4>
                    <strong>{item.role}</strong>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="page-shell">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="section-kicker">{t.projectsLabel}</p>
              <h2>{t.projectsTitle}</h2>
            </div>
            <p>{t.projectsIntro}</p>
          </div>
          <div className="projects-grid">
            {t.projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <article key={project.title} className="project-card">
                  <div className="project-topline">
                    <span>0{index + 1}</span>
                    <Icon />
                  </div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <div
                    className={`project-details ${
                      'image' in project ? 'has-preview' : ''
                    }`}
                  >
                    <p className="project-body">{project.body}</p>
                    {'image' in project && (
                      <Dialog>
                        <DialogTrigger
                          className="project-thumbnail"
                          aria-label={
                            language === 'zh'
                              ? `放大查看${project.title}图片`
                              : `Enlarge the ${project.title} image`
                          }
                        >
                          <img src={project.image} alt={project.imageAlt} />
                          <span className="project-thumbnail-hint">
                            <Maximize2 aria-hidden="true" />
                            {language === 'zh' ? '点击放大' : 'Enlarge'}
                          </span>
                        </DialogTrigger>
                        <DialogContent className="project-image-dialog">
                          <DialogHeader className="project-image-dialog-header">
                            <DialogTitle>{project.title}</DialogTitle>
                            <DialogDescription>
                              {project.imageCaption}
                            </DialogDescription>
                          </DialogHeader>
                          <img
                            className="project-image-full"
                            src={project.image}
                            alt={project.imageAlt}
                          />
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-main">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>{t.footerTitle}</h2>
            <p>{t.footerBody}</p>
          </div>
          <Button
            size="lg"
            className="footer-button"
            nativeButton={false}
            render={<a href="mailto:wangrn117@ruc.edu.cn" />}
          >
            <Mail data-icon="inline-start" />
            {t.footerEmail}
            <ArrowUpRight data-icon="inline-end" />
          </Button>
        </div>
        <div className="page-shell footer-bottom">
          <span>© 2026 Ruonan Wang</span>
          <span>{t.footerNote}</span>
        </div>
      </footer>
    </main>
  );
}
