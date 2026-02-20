# Pebble Homepage - Whitepaper Version

## Requirements

역할: 너는 시니어 웹디자이너 + 프론트엔드 엔지니어다.
목표: “비트코인 백서(학술 PDF/LaTeX) 같은 담백한 문서” 느낌으로 Pebble의 텍스트 중심 웹페이지를 만든다.
핵심: 형식/레이아웃/타이포만 ‘백서스럽게’ 만들고, 내용은 제공된 COPY_PACK 텍스트를 그대로 배치한다.
주의:
- 투자 권유/수익 보장/가격 전망 등 새로운 문구를 절대 만들지 않는다.
- 제공된 COPY_PACK 텍스트는 요약/의역/재작성/자동 번역 없이 ‘원문 그대로’ 출력한다.
산출물: 반응형 단일 페이지(권장) + 프린트 최적화(print CSS) + KO/EN 토글.
파일: index.html / styles.css / app.js (프레임워크 없이)

────────────────────────────────────────
[핵심 제약]
1) COPY_PACK 텍스트는 원문 그대로 출력 (요약/의역/재작성/자동 번역 금지).
   - 출력은 반드시 pre-wrap(white-space: pre-wrap)로 줄바꿈/문단 유지.
2) 이미지/동영상 0개(권장). 차트/다이어그램이 필요하면 이미지 대신:
   - “텍스트 표” 또는 “단순 SVG(선/텍스트만)”로 최소 구현 (기본은 아예 생략 가능).
3) 과한 애니메이션 금지(문서/논문 느낌 유지). 전환은 있어도 150ms 페이드 이하 수준.
4) 색상은 2~3개로 제한(배경/잉크/링크 정도).

────────────────────────────────────────
[디자인 컨셉: 비트코인 백서(학술 PDF) 같은 ‘담백한 LaTeX 문서’]
- 느낌 키워드: plain, academic, LaTeX, minimal, print-first, serif
- 배경:
  - 웹 뷰어 느낌을 위해 바깥 배경은 아주 옅은 회색(#F3F4F6 근사) 가능
  - 실제 “종이 페이지” 컨테이너는 white(#FFFFFF) 또는 very light paper(#FFFEFA)
- 페이지 컨테이너(문서 1장처럼):
  - 중앙 정렬, 폭 820~960px
  - 패딩은 인쇄물처럼 넉넉하게(상하 56~72px, 좌우 56~72px)
  - 그림자는 ‘거의 없는 수준’으로 매우 약하게(또는 1px border만)
- 타이포(비트코인 백서 톤의 핵심):
  - 기본은 Times 계열/전통 Serif에 가깝게:
    - font-family 우선순위 예:
      "Times New Roman", Times, "Nimbus Roman No9 L", "Liberation Serif",
      "Noto Serif KR", "Apple SD Gothic Neo", serif
  - 본문 크기: 16~18px (웹 가독성 고려) / line-height 1.65~1.85
  - 제목/섹션 헤딩:
    - 과장된 디스플레이 폰트 금지
    - H1: 34~44px (센터 정렬)
    - H2(섹션): 18~22px (번호 포함, bold/semibold)
  - 문단 스타일:
    - ‘논문 느낌’으로 text-align: justify 선택 가능(가독성 문제 있으면 left)
    - hyphens: auto (지원 시)
- 컬러(2~3개):
  - 잉크 텍스트: #111111
  - 보조 텍스트: #6B7280
  - 링크/강조색 1개: #0B1F3B(네이비) 또는 정통 링크 블루 중 택1 (과용 금지)
  - 링크는 underline 기본, hover는 underline 유지 + 미세한 색 변화만

────────────────────────────────────────
[정보 구조(단일 페이지 권장) — ‘논문/백서’ 흐름]
- Cover (Title block)
- Abstract
- (Optional) Contents (TOC)  ← 비트코인 백서에는 TOC가 없지만, 웹 탐색을 위해 ‘아주 담백하게’ 제공
- 1. Introduction (About / Approach)
- 2. Team (People)
- 3. Participation (Career)
- 4. Contact
- References / Notes (footer)

※ 섹션 타이틀은 ‘백서 느낌’을 위해 대문자/스몰캡 느낌으로 처리 가능.
※ 본문(COPY_PACK)은 절대 바꾸지 않는다.

────────────────────────────────────────
[Cover 구성 (비트코인 백서 표지 스타일)]
- 상단 메타 라인(작고 정갈하게, 좌측 정렬 또는 우측 정렬):
  - “PEBBLE WHITEPAPER (FORMAT-INSPIRED)”
  - Version: v1.0
  - Date: YYYY-MM-DD
  - Model: Opus 4.6   ← 반드시 포함
  - Language: KO | EN (토글)
  - Print (텍스트 버튼, window.print())
- 중앙 타이틀(센터 정렬):
  - Title: “Pebble”
  - Subtitle(작게): COPY_PACK.[lang].home.hero_line (원문 그대로)
- 하단 고지(텍스트 1줄만, 과장 금지):
  - “This document is provided for informational purposes only.”
  - (KO 모드면 한국어 1줄로 표시해도 되지만, 새 문장 만들지 않으려면 위 문구 그대로 유지 가능)

────────────────────────────────────────
[Abstract]
- 섹션 제목: “Abstract”
- 본문: COPY_PACK.[lang].home.intro 를 원문 그대로 출력(pre-wrap)

────────────────────────────────────────
[Contents (TOC) — 웹용, ‘논문스럽게’ 최소]
- 제목: “Contents”
- 항목은 번호+텍스트 링크로 단순 나열(박스/카드 금지):
  1. Introduction
  2. Team
  3. Participation
  4. Contact
  References
- 데스크탑에서만 좌측 sticky TOC를 제공하고 싶다면:
  - sticky는 허용하되, 시각적으로 과한 사이드바 금지
  - “마진 노트(margin notes)”처럼 아주 얇게 보이게(작은 폰트 + 여백)
- 모바일은 TOC를 상단에 접힘(텍스트 버튼: “Contents ▾”)으로 제공

────────────────────────────────────────
[본문 섹션 규칙 (비트코인 백서처럼 담백한 번호 체계)]
- 각 섹션 제목은 “번호 + 제목” 형태(예: “1. Introduction”)
- 본문은 COPY_PACK를 원문 그대로 출력(pre-wrap)
- 섹션 간 구분은 선 대신 여백(64~96px)
- 필요 시 각 섹션 상단에 아주 작은 메타 1줄을 허용(예: “Section” 같은 UI 라벨)
  - 단, 본문 내용에 새로운 의미/주장을 추가하는 문장은 금지

섹션 매핑(원문 그대로):
- 1. Introduction → COPY_PACK.[lang].about
- 2. Team → COPY_PACK.[lang].people
- 3. Participation → COPY_PACK.[lang].career
- 4. Contact → COPY_PACK.[lang].contact
- References / Notes → COPY_PACK.[lang].footer

────────────────────────────────────────
[문서형 ‘PDF’ 디테일(비트코인 백서 감성 강화)]
- “문단 첫 줄 들여쓰기”를 선택적으로 적용(논문 느낌):
  - 단, COPY_PACK의 원문 줄바꿈을 망가뜨리지 않는 범위에서만
- 각주/참조 느낌은 “UI 메타”로만 최소 허용:
  - 예: 섹션 하단에 아주 작은 글씨로 “End of section.” 같은 문구는 가능
  - 그러나 새로운 내용/주장/설명은 넣지 말 것
- 페이지 번호:
  - 웹에서는 생략 가능
  - print CSS에서만 footer에 페이지 번호를 넣는 방향 권장

────────────────────────────────────────
[프린트 최적화(print CSS) — ‘진짜 PDF’처럼]
- @media print:
  - 바깥 회색 배경 제거, 컨테이너 그림자/보더 제거
  - 헤더의 토글/프린트 버튼은 숨기거나 최소화
  - 섹션 앞에서 page-break(선택):
    - Cover 이후 Abstract는 첫 페이지에 남기고
    - 1. Introduction부터는 섹션 단위 page-break 가능
  - 링크는 밑줄 유지, URL 표기 강제는 하지 않아도 됨(문서 느낌 유지)

────────────────────────────────────────
[기능(선택, 문서 UX 강화)]
- “/” 키를 누르면 페이지 내 검색창에 포커스(검색창은 작고 담백하게)
- 현재 섹션 TOC 하이라이트: underline 또는 잉크/보조색 변화 정도만
- KO/EN 토글:
  - 토글 시 COPY_PACK의 ko/en만 스위칭(번역 생성 금지)

────────────────────────────────────────
[콘텐츠 소스]
- 아래 COPY_PACK만을 텍스트 소스로 사용한다.
- COPY_PACK 텍스트는 절대 수정하지 않는다.

--- COPY_PACK START ---
COPY_PACK:
  ko:
    home:
      hero_line: "Established Algorithm-based Proprietary Trading Firm"
      intro: |
        (여기에 홈 소개 텍스트 원문 그대로)
    about: |
      (여기에 About 텍스트 원문 그대로)
    people: |
      (여기에 People 텍스트 원문 그대로)
    career: |
      (여기에 Career 텍스트 원문 그대로)
    contact: |
      (여기에 Contact 텍스트 원문 그대로)
    footer: |
      (여기에 Footer 텍스트 원문 그대로)
  en:
    home:
      hero_line: "Established Algorithm-based Proprietary Trading Firm"
      intro: |
        (여기에 EN 홈 소개 텍스트 원문 그대로)
    about: |
      (여기에 EN About 텍스트 원문 그대로)
    people: |
      (여기에 EN People 텍스트 원문 그대로)
    career: |
      (여기에 EN Career 원문 그대로)
    contact: |
      (여기에 EN Contact 원문 그대로)
    footer: |
      (여기에 EN Footer 원문 그대로)
--- COPY_PACK END ---
📋 Pebble 웹사이트 Copy Pack
1. Home (/)
항목	내용
타이틀	Pebble
태그라인	Established Algorithm-based Proprietary Trading Firm
메뉴	About | People | Career | Contact
2. About (/about)
🇰🇷 한국어
항목	내용
페이지 제목	About
인트로	페블은 폭넓은 데이터를 고도의 알고리즘으로 분석하고, 투자 빈도를 최대화해서 꾸준한 수익을 내는 것을 목표로 합니다.
본문 1	페블은 2021년 설립 이후, 디지털 자산 시장에서 저위험 저수익 거래를 지속해 왔습니다. 페블의 구성원은 시장은 매우 효율적이라는 믿음 아래, 위험을 최소화한 투자전략을 사용합니다. 폭넓은 데이터를 고도의 알고리즘으로 분석하고, 투자 빈도를 최대화해서 꾸준한 수익을 내는 것을 목표로 합니다. 시장을 이길 수 있다는 주장, 논리, 과시는 대부분 실패합니다. 투자의 역사를 돌아보면 뛰어난 투자 전문가가 그 성과를 지속하는 확률은 매우 낮습니다. 직관에 의존하는 대중의 투자도 대부분 실패합니다. 페블은 직관에 의존하지 않고 모든 전략을 알고리즘으로 실행하며 최대 위험은 제한되어 있습니다.

Quantitative Investment	데이터를 통계적으로 분석하여 규칙에 기반한 (rule-based) 거래를 실행
Arbitrage (차익거래)	두개 이상의 시장에서 같은 자산에 대해 가격의 차이가 발생할 경우, 그 괴리를 메우는 거래를 실행하여 무위험 수익을 얻음
Unstructured data	비정형 데이터를 활용 가능한 데이터로 변환 및 분석하여 투자 전략 실행
강조문	페블은 직관에 의존하지 않고 모든 전략을 알고리즘으로 실행합니다.
본문 2	페블에는 외부투자자와 고객이 없습니다.
본문 3	페블은 근거없는 자신감은 지양합니다. 다만, 투자의 패러다임이 바뀌고 있음을 이해하고 기술을 활용한 투자 전략에 집중합니다. 시장 가격의 위대함을 이해하지 못하는 기술은 실패하고, 기술을 무시하는 자아도취형 전문가 또한 실패합니다. 페블은 설립 이래 직관 대신 기술에 기반한 투자를 통해 꾸준히 성과를 내고 있습니다. 페블은 위험 조정 수익률을 최대화 하는 것을 목표로 합니다. 페블의 투자 전략 특성을 고려하여, 불특정 다수를 대상으로 한 펀딩 등 운용 규모의 확대를 계획하고 있지 않으며, 상당 기간 자기자본 투자를 지속 할 예정입니다.

본문 4	물론 Quant, Arbitrage 전략 또한 만능은 아닙니다. 업계에서 활용하는 전략은 overfitting의 위험을 충분히 경계하지 못한 경우가 많으며 이에 따라 전략의 쏠림이 심화되어 굉장히 짧은 기간에 걸쳐 장기간의 성과를 반납하는 역사를 반복하기도 합니다. Arbitrage는 기술과 인프라에 대한 대중의 접근이 용이해지며 점차 성과가 낮아지고 있습니다.

🇺🇸 English
항목	내용
인트로	Pebble analyzes a wide range of data with advanced algorithms and aims to generate consistent returns by maximizing trade frequency.
본문 1	Since its establishment in 2021, Pebble has been conducting low-risk, low-return trades in the digital asset market. Under the belief that markets are highly efficient, Pebble's team uses investment strategies that minimize risk. We analyze a wide range of data with advanced algorithms and aim to generate consistent returns by maximizing trade frequency. Claims, logic, and boasting about beating the market mostly fail. Looking back at investment history, the probability of outstanding investment professionals sustaining their performance is very low. Public investment relying on intuition also mostly fails. Pebble does not rely on intuition; all strategies are executed algorithmically with maximum risk being limited.
Quantitative Investment	Statistically analyzing data to execute rule-based trading.
Arbitrage	When price differences for the same asset occur across two or more markets, we execute trades to capture the gap and obtain risk-free returns.
Unstructured Data	Converting and analyzing unstructured data into usable data to execute investment strategies.
본문 2	Pebble has no external investors or clients. Pebble avoids unfounded confidence. However, we understand that the investment paradigm is changing and focus on technology-driven investment strategies. Technology that fails to understand the greatness of market prices will fail, and self-absorbed experts who ignore technology will also fail. Since its establishment, Pebble has consistently generated results through technology-based rather than intuition-based investment. Pebble aims to maximize risk-adjusted returns. Given the nature of Pebble's investment strategies, we do not plan to expand the scale of operations through funding targeting the general public, and will continue proprietary capital investment for a considerable period.
본문 3	Of course, Quant and Arbitrage strategies are not infallible either. Strategies commonly used in the industry often fail to adequately guard against overfitting risks, leading to concentration of strategies and the historical pattern of returning long-term gains over very short periods. Returns from arbitrage have been gradually declining as public access to technology and infrastructure becomes easier.
3. People (/people)
이름	직책	인용구	경력
Jinseok Kim	Founder and CEO	"Seize the day, boys."	전) Line Corp, Portfolio Manager / 전) Korea Investment Corporation, Portfolio Manager / 서울대학교 경영학과 / CFA charterholder / CAIA charterholder
Jaeyeon Yoon	Head, System Trading	"Seize the day, boys."	전) AIRS Medical, Co-founder / 서울대학교 전기정보공학부
Kyungwook Nam	Portfolio Manager, System Trading	"Seize the day, boys."	전) Artefact Korea, Data Consulting / 전) KeyToWay, IT Consulting / 전) AT Kearney, Strategy Consulting / 전) Story Education, STEM Instructor / Univ. of Cambridge Systems Biology (석사) / Univ. of Cambridge Mathematics
Sunghak Kang	COO	"Seamos realistas, realisemos lo imposible!"	전) McKinsey Seoul office, Associate Partner / 전) LG Household & Healthcare, Marketer / NYU Stern School of Business, MBA / 고려대학교 경영학과
4. Career (/career)
항목	내용
안내문 (KO)	아래 포지션 지원자는 recruit@pebblecorp.io로 이력서 및 자기소개서(지원동기 포함 자유양식) 송부해주세요.
안내문 (EN)	Interested candidates, please send your resume and cover letter to recruit@pebblecorp.io.
포지션 1: 정규직 — 디지털 자산 시스템 운용
구분	내용
주요 업무	자금 운용 / 퀀트, 차익거래 투자 아이디어 개발
자격 요건	4년제 대학 이상 학위 취득자 또는 6개월 이내 졸업 예정자 / 신입/경력
기타 사항	재택근무 / 성과보수 협의 / 수습기간 3개월
포지션 2: 인턴 — 디지털 자산 알고리즘 트레이더
구분	내용
주요 업무	디지털 자산 투자 알고리즘 개발, 트레이딩 및 리서치
자격 요건	4년제 대학 이상 학위 취득자 또는 재학생 (주당 20시간 이상 근무 가능)
기타 사항	재택근무
5. Contact (/contact)
항목	KO	EN
안내문	페블의 비즈니스 및 파트너십에 대한 문의 사항은 아래 양식에 기입 또는 business@pebblecorp.io로 메일주세요.	For business and partnership inquiries, please fill out the form below or email business@pebblecorp.io.
폼 필드	이름 / 이메일 / 메시지	Name / Email / Message
버튼	제출	Submit
완료 메시지	제출해주셔서 감사합니다!	Thank you for your submission!
6. Footer (공통)
항목	내용
회사 정보	주식회사 페블 | 사업자등록번호 201-86-47145 | business@pebblecorp.io
언어 토글	KO | EN
7. Navigation (서브페이지 공통)
항목	내용
좌측	← Home
우측 메뉴	About / People / Career / Contact

