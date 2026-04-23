export default function ResumeWebpage() {
  const strengths = [
    {
      title: "AI 产品落地",
      items: ["意图理解（SFT 微调）", "Agent 架构设计", "动态工具调度", "评测体系搭建"],
    },
    {
      title: "内容策略闭环",
      items: ["创作灵感挖掘", "策略分发", "效果归因", "内容趋势洞察"],
    },
    {
      title: "数据产品能力",
      items: ["指标体系搭建", "归因分析", "数据平台产品设计", "标签资产治理"],
    },
    {
      title: "复合优势",
      items: ["内容 × 数据 × AI", "业务目标到模型能力串联", "评测驱动迭代", "长期价值增长"],
    },
  ];

  const skills = [
    "AI Agent 设计",
    "意图理解 / SFT 微调",
    "提示词工程",
    "动态工具调度",
    "评测体系搭建",
    "内容策略与运营",
    "指标体系设计",
    "归因分析",
    "Tag & 图像体系",
    "数据平台产品设计",
  ];

  const highlights = [
    { value: "1800+", label: "日均牵引优质投稿", note: "创作灵感项目" },
    { value: "+27pp", label: "归因准确率提升", note: "57% → 84%" },
    { value: "+20.1pp", label: "意图识别准确率提升", note: "SFT 微调后" },
    { value: "200%", label: "标签上线效率提升", note: "3 天 → 1 天" },
    { value: "500+ PV", label: "数据分析专题月均访问量", note: "指标平台" },
  ];

  const experiences = [
    {
      company: "字节跳动",
      role: "内容策略产品｜创作灵感挖掘与应用",
      period: "2024.06 – 至今",
      projects: [
        {
          name: "创作灵感 Agent & AI 服务",
          time: "2025.04 – 至今",
          bullets: [
            "主导将‘平台中心化分发’升级为 AI 对话式创作助手，支持创作者主动获取个性化选题与创作建议。",
            "定义二级意图分类并构建正负样本库完成 SFT 微调，意图识别准确率提升 20.1pp+；联合垂类专家制定 7 大意图多维评分标准，将主观评审转化为量化评估体系。",
            "设计动态工具调度的 Agent 架构，解决固定 Prompt + Workflow 在多轮对话中的僵化问题，问答合格率提升 15.6pp。",
            "建设两项核心能力：平台内容趋势挖掘（时间切片 + 趋势预判）与相似创作者检索（对标账号 + 创作建议），把单次灵感延展为长期创作参考。",
            "搭建零代码知识管理平台，形成‘经验沉淀 → 策略调优 → 智能分发’的持续迭代链路。",
          ],
        },
        {
          name: "创作灵感生产 & 分发全链路（从 0 到 1）",
          time: "2024.06 – 2025.03",
          bullets: [
            "围绕‘促进优质投稿’目标，搭建‘灵感挖掘 → 策略分发 → 效果归因’的完整闭环。",
            "从 0 构建清洗、挖掘、审核生产线及标签体系，将灵感流转产品化，覆盖选题与视频两类形态，日均牵引 1800+ 优质投稿。",
            "设计‘消费路径 + 稿件要素拆解’双维归因模型，结合相似度算法交叉比对，归因准确率从 57% 提升至 84%。",
          ],
        },
      ],
    },
    {
      company: "蚂蚁国际",
      role: "数据应用产品｜支付指标体系与指标平台搭建",
      period: "2022.09 – 2024.06",
      bullets: [
        "围绕业务流程，将分散的烟囱式表资产抽象为分析专题、维度与指标，支持业务灵活看数与用数。",
        "落地 4 个线上支付成功率分析专题：通用 PSR 分析、重点渠道洞察、专项产品能力洞察、大商户定制分析，提升数据资产复用率。",
        "从 0 到 1 搭建 4 个线下支付数据分析专题（观测 → 通路拆解 → 归因分析 + 异动监测），指标全集完成 97.4%，专题月均访问 PV 达 500+。",
      ],
    },
    {
      company: "滴滴出行",
      role: "标签平台产品｜用户画像与标签平台建设",
      period: "2020.06 – 2022.09",
      bullets: [
        "从 0 到 1 落地离线 / 实时数据源自助接入功能，标签上线效率提升 200%（3 天 → 1 天），累计接入 358 个标签，节省 187 人日。",
        "搭建标签资产大盘，实现使用数据、质量数据可视化监控及存量治理，产品覆盖 90% 数据团队，治理下线 63 个低效标签。",
        "围绕一站式用户分层，落地 SQL 分群、跨域计算分群、ID-Mapping 转换分群三项能力，转化 76% 高频上传用户，分群月均使用量提升 109%。",
        "支持国际化业务：巴西司机侧贡献 3.4% / 2.1% 在线时长增量；墨西哥乘客侧冒泡发单转化率提升 5.8%。",
      ],
    },
  ];

  const education = [
    {
      school: "香港城市大学",
      degree: "市场营销学硕士",
      period: "2018.09 – 2020.10",
      meta: ["GPA 3.8 / 4.0", "专业 Top 1%", "法国里昂商学院公费交换一学期", "优秀毕业生（比例 < 5%）"],
    },
    {
      school: "东华大学",
      degree: "管理学学士",
      period: "2014.09 – 2018.06",
      meta: ["GPA 3.76 / 5.0", "专业 Top 10%", "台湾逢甲大学公费交换一学期", "4 次校级奖学金"],
    },
  ];

  const languages = [
    { name: "中文", level: 5, label: "母语" },
    { name: "English", level: 4, label: "流利" },
  ];

  return (
    <div className="min-h-screen bg-[#f6f3ef] text-neutral-800">
      <div className="mx-auto max-w-[1440px] px-6 py-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
          <aside className="space-y-6 rounded-[28px] border border-[#e8dfd6] bg-[#fbf8f4] p-7 shadow-sm">
            <div>
              <div className="mb-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full border border-[#e9ddd1] bg-white px-3 py-1 text-neutral-600">Open to Product Roles</span>
                <span className="rounded-full border border-[#e9ddd1] bg-white px-3 py-1 text-neutral-600">Content / AIGC / AI</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">许祯瑶</h1>
              <p className="mt-1 text-2xl text-neutral-800">Zhenyao XU</p>
            </div>

            <div className="space-y-3 text-[15px] text-neutral-700">
              <div className="flex items-center gap-3"><span>📞</span><span>139 1885 4251（微信同号）</span></div>
              <div className="flex items-center gap-3"><span>✉️</span><span>zhenyaoxu.cn@gmail.com</span></div>
              <div className="flex items-center gap-3"><span>🔗</span><a className="underline decoration-[#f08a60] underline-offset-4" href="https://zhenyaoxucn.github.io/portfolio" target="_blank" rel="noreferrer">zhenyaoxucn.github.io/portfolio</a></div>
              <div className="flex items-center gap-3"><span>📍</span><span>上海</span></div>
            </div>

            <section className="border-t border-[#eadfd5] pt-6">
              <h2 className="mb-4 text-xl font-semibold text-neutral-900">核心能力</h2>
              <div className="space-y-5">
                {strengths.map((item) => (
                  <div key={item.title}>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-[#f08a60]">✦</span>
                      <h3 className="font-medium text-neutral-900">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-7 text-neutral-600">{item.items.join("｜")}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-[#eadfd5] pt-6">
              <h2 className="mb-4 text-xl font-semibold text-neutral-900">专业技能</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-[#efc5af] bg-[#fff7f2] px-3 py-1.5 text-sm text-[#d96d3d]">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="border-t border-[#eadfd5] pt-6">
              <h2 className="mb-4 text-xl font-semibold text-neutral-900">教育经历</h2>
              <div className="space-y-5">
                {education.map((ed) => (
                  <div key={ed.school}>
                    <div className="font-medium text-neutral-900">{ed.school}｜{ed.degree}</div>
                    <div className="mt-1 text-sm text-neutral-500">{ed.period}</div>
                    <ul className="mt-2 space-y-1 text-sm leading-6 text-neutral-600">
                      {ed.meta.map((m) => <li key={m}>• {m}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-[#eadfd5] pt-6">
              <h2 className="mb-4 text-xl font-semibold text-neutral-900">语言能力</h2>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between gap-4">
                    <div>
                      <div className="font-medium text-neutral-800">{lang.name}</div>
                      <div className="text-sm text-neutral-500">{lang.label}</div>
                    </div>
                    <div className="flex gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`h-2.5 w-2.5 rounded-full ${i < lang.level ? "bg-[#f08a60]" : "bg-[#d9d2cb]"}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          <main className="space-y-6">
            <section className="rounded-[28px] border border-[#e8dfd6] bg-[#fbf8f4] p-8 shadow-sm">
              <div className="text-5xl leading-none text-[#f08a60]">“</div>
              <p className="mt-4 max-w-5xl text-lg leading-9 text-neutral-700">
                5 年产品经验，横跨内容策略、AI Agent 与数据产品。擅长从业务目标出发，结合模型能力与评测体系，
                搭建可验证、可迭代、可规模化的产品解决方案，驱动创作者参与与用户价值增长。
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-[#efe4da] bg-white px-5 py-6">
                    <div className="text-4xl font-semibold tracking-tight text-[#ef7f4d]">{item.value}</div>
                    <div className="mt-3 text-base font-medium text-neutral-800">{item.label}</div>
                    <div className="mt-1 text-sm leading-6 text-neutral-500">{item.note}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-[#e8dfd6] bg-[#fbf8f4] p-8 shadow-sm">
              <div className="mb-8 flex items-center gap-4">
                <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">工作经历</h2>
                <div className="h-px flex-1 bg-[#d8ccc0]" />
              </div>

              <div className="space-y-10">
                {experiences.map((exp) => (
                  <div key={exp.company} className="relative pl-8">
                    <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-[#f08a60] bg-white" />
                    <div className="absolute left-[7px] top-6 bottom-[-28px] w-px bg-[#eadfd5]" />

                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="text-2xl font-semibold text-neutral-900">{exp.company}</h3>
                          <span className="text-lg text-neutral-600">{exp.role}</span>
                        </div>
                      </div>
                      <div className="text-base font-medium text-[#e07b4d]">{exp.period}</div>
                    </div>

                    {exp.projects ? (
                      <div className="mt-5 space-y-6">
                        {exp.projects.map((project) => (
                          <div key={project.name} className="rounded-3xl border border-[#eee3d8] bg-white p-5">
                            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                              <h4 className="text-lg font-semibold text-neutral-900">{project.name}</h4>
                              <div className="text-sm font-medium text-[#e07b4d]">{project.time}</div>
                            </div>
                            <ul className="mt-4 space-y-3 text-[15px] leading-8 text-neutral-700">
                              {project.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-3"><span className="mt-2 text-[#f08a60]">•</span><span>{bullet}</span></li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="mt-5 space-y-3 text-[15px] leading-8 text-neutral-700">
                        {exp.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3"><span className="mt-2 text-[#f08a60]">•</span><span>{bullet}</span></li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
