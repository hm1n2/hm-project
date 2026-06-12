# 벤치마크 리서치 — TRADDY

> Vibe UX · benchmark-research 산출물
> 조사일: 2026-06-12
> 기반: [docs/idea.md](/Users/hm1n2/Desktop/hm-project/docs/idea.md)

## 한 줄 요약
현재 시장은 `여행 친구 찾기`, `여성 안전 커뮤니티`, `로컬 이벤트/숙소 기반 만남`으로 흩어져 있고, **오늘/내일 일정에 맞는 짧은 여행 동행 + 신뢰 가능한 정산**에 특화된 서비스는 비어 있다.

## 경쟁·참고 서비스 한눈에 보기

### 직접 경쟁 (Direct)
| # | 서비스 | URL | 한 줄 포지셔닝 | 타깃 | 가격 |
|---|--------|-----|--------------|------|------|
| 1 | GAFFL | https://www.gogaffl.com/ | 여행 동행을 찾아 비용과 경험을 함께 나누는 travel buddy 서비스 | 솔로 여행자, 예산형 여행자, 해외 동행 탐색 사용자 | — |
| 2 | NomadHer | https://www.nomadher.com/ | 여성 솔로 여행자를 위한 검증형 커뮤니티 + travel buddy 서비스 | 여성 혼행자 | — |
| 3 | TripBFF | https://tripbff.com/ | 전 세계 여행자와 친구를 만들고 그룹 플랜을 찾는 소셜 여행 앱 | 여행 중 새 친구를 만들고 싶은 모바일 사용자 | — |

### 간접 경쟁·대체재 / 참고 레퍼런스
| # | 서비스 | URL | 왜 참고하는가 | 겹치는 지점 |
|---|--------|-----|--------------|------------|
| 1 | Couchsurfing | https://www.couchsurfing.com/ | 여행 중 현지인/여행자를 만나는 가장 오래된 신뢰 기반 네트워크 중 하나 | 여행 중 낯선 사람과 연결, 프로필/안전 레이어 |
| 2 | Meetup | https://www.meetup.com/ | 지역 기반 오프라인 만남을 구조화한 대표 서비스 | 현지에서 사람을 빠르게 만나기, 이벤트 중심 매칭 |

## 핵심 기능 비교
TRADDY의 핵심 기능을 기준으로 봤을 때, 현재 서비스들은 `사람을 연결하는 기능`은 이미 강하지만 `지금 이 일정에 맞는 가벼운 동행`과 `비용 정산 안전장치`는 약하다.

| 기능/측면 | GAFFL | NomadHer | TripBFF | Couchsurfing | Meetup |
|----------|-------|----------|---------|--------------|--------|
| 일정·위치 기반 탐색 | 목적지/근처 사용자 탐색 중심 | 같은 목적지·같은 시점 버디 탐색 강조 | 내 주변 그룹·플랜 탐색 | 로컬/여행자 연결 중심 | 지역 그룹/이벤트 탐색 중심 |
| 짧은 단위 동행 | 가능하지만 여행 전체 동행 톤이 강함 | 버디 + 밋업/캠프 중심 | 소셜 그룹 참여 중심 | 숙소/행아웃/이벤트 중심 | 이벤트 참석 중심 |
| 여행 성향 프로필 | 기본 프로필/트립 포스트 중심 | 여성 전용 커뮤니티, 같은 성향 강조 | 친구 만들기 분위기 강함, 세밀한 여행 취향은 약해 보임 | 프로필/레퍼런스 기반 | 개인보다 그룹 관심사 중심 |
| 인증·신뢰 장치 | 공개 랜딩 기준 강한 신뢰 장치 노출은 약함 | `fully-verified female-only`를 전면에 둠 | 공개 랜딩 기준 확인 어려움 | Safety/Support, 오래된 커뮤니티 레이어 존재 | 플랫폼 신뢰는 있으나 1:1 여행 동행 신뢰 설계는 약함 |
| 후기/레퍼런스 | 미확인 | 커뮤니티 후기/추천사 노출 | 추천사 노출 | 커뮤니티 레퍼런스 강점 | 그룹/주최자 평판 중심 |
| 비용 보관·정산 | 없음/미확인 | 없음/미확인 | 없음/미확인 | 없음 | 이벤트 결제는 가능하지만 동행 정산과는 다름 |

## 관찰 — 잘하는 점 / 아쉬운 점
- **GAFFL**: 첫 문장에서 `travel buddy`와 `share costs`를 바로 이해시켜 메시지가 선명하다. 다만 공개 페이지 기준으로는 `오늘 저녁 한 끼`, `내일 반나절`처럼 짧고 즉흥적인 액티비티 동행보다 여행 메이트 탐색에 더 가깝다.
- **NomadHer**: 여성 혼행자의 핵심 불안인 안전을 가장 명확하게 잡는다. 반면 TRADDY가 겨냥하는 혼성/일반 한국인 여행자 시장 전체를 커버하는 범용성은 낮고, 경험의 중심이 커뮤니티와 캠프 쪽에 더 가깝다.
- **TripBFF**: `get offline & see the world`, `Join Groups in your area`처럼 가볍고 소셜한 톤이 좋아 진입 장벽이 낮다. 하지만 공개 정보상 신뢰 검증, 조건형 모집, 정산 안전장치는 보이지 않는다.
- **Couchsurfing**: 여행 중 사람을 만나는 동기가 매우 강하고, 오랜 시간 축적된 안전/지원 문서가 있다. 다만 숙소/호스팅의 맥락이 섞여 있어 `가볍게 한 끼 같이 먹을 사람`보다 심리적 부담이 크다.
- **Meetup**: 지역 기반 오프라인 만남을 구조화한 흐름은 참고할 가치가 크다. 하지만 행사/그룹 중심이라 여행자 개인의 동선, 무드, 엔빵 같은 문제를 세밀하게 풀지는 않는다.

## 참고 이미지
| 파일 | 무엇인지 | 출처 |
|------|----------|------|
| [images/01.png](/Users/hm1n2/Desktop/hm-project/docs/images/01.png) | GAFFL 대표 로고 | https://assets.gogaffl.com/assets/GAFFL-logo-new-white-c0eef0f4d7bf219883ab5cdc17c33b92aa0b59cff9a7448de8c8cd505fbc6368.png |
| [images/02.jpg](/Users/hm1n2/Desktop/hm-project/docs/images/02.jpg) | NomadHer 히어로 비주얼 | https://cdn.prod.website-files.com/6424fe2a28c3f885a4d99326/6452109263e1313f252882a2_vecteezy_group-of-a-young-asian-woman-taking-selfies-having-fun-together-a-summer-traveling_3661-poster-00001.jpg |
| [images/03.jpg](/Users/hm1n2/Desktop/hm-project/docs/images/03.jpg) | TripBFF 그룹/멤버 카드에 사용되는 인물 이미지 예시 | https://framerusercontent.com/images/Tv8VkPU06AsCdtdYeOrfs8xa6o.jpg?width=1200&height=1600 |
| [images/04.png](/Users/hm1n2/Desktop/hm-project/docs/images/04.png) | Couchsurfing 소셜 배너 이미지 | https://www.couchsurfing.com/images/social-banner.png |
| [images/09.webp](/Users/hm1n2/Desktop/hm-project/docs/images/09.webp) | GAFFL 메인 비주얼 이미지 | https://assets.gogaffl.com/assets/finad-a-travel-buddy-2-09529eb667fd5915be3a6021d23c7a7d26a5b3c512b41690b519ba4e880879f1.webp |

## 우리의 차별 프레이밍
경쟁 서비스들은 대부분 `여행 중 사람을 만나는 일` 자체에는 집중하지만, **오늘의 동선·여행 무드·정산 불안**을 한 번에 다루지는 못한다. TRADDY는 여기서 `지금 같이 움직일 수 있는 사람`을 찾는 문제를 더 짧고 안전하게 풀어야 한다.

- **빈틈/기회:** 여행 전체 메이트나 느슨한 커뮤니티는 많지만, `오늘 저녁/내일 오전` 단위의 초단기 동행 매칭과 비용 보관은 비어 있다.
- **우리의 자리(포지셔닝):** TRADDY는 해외 혼행자를 위한 `same-day travel companion layer`다.
- **차별 포인트:** 일정·루트·무드 기반 추천, 조건형 모집, 후기/인증, 에스크로형 엔빵 정산을 한 흐름으로 묶는다.

## 출처
- [GAFFL](https://www.gogaffl.com/)
- [NomadHer](https://www.nomadher.com/)
- [TripBFF](https://tripbff.com/)
- [Couchsurfing](https://www.couchsurfing.com/)
- [Meetup](https://www.meetup.com/)
