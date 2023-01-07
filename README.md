# Start-NextJS

Nomad Coders의 `NextJS 시작하기` 강좌를 보며 학습한 내용을 정리하는 저장소

## 나만의 학습정리

### 라이브러리

- 라이브러리는 부품(=프로그래머가 가져다 쓰기 편한 형태의 코드 조각)을 제공한다.

→ 프로그래머는 틀을 만들고, 라이브러리가 제공해준 부품을 그 틀에 끼워넣으면 된다.

### 프레임워크

- 프레임워크는 부품(=프로그래머가 작성한 코드 조각)을 끼워넣을 수 있는 틀을 제공한다

→ 프로그래머는 부품을 만들고, 그 부품을 프레임워크가 제공해준 틀에 끼워넣으면 된다.

### NextJS

- 파일 이름이 URL path 역할을 한다. 따라서 각 파일은 JSX 요소를 `default export` 해야 한다.
- JSX 문법 사용 시 React를 `import`하는 구문을 따로 작성할 필요가 없다. NextJS에 내장되어 있는 듯 하다.
  (단 JSX가 아닌 useEffect 등은 `import` 필요)
- `.js` 확장자에서도 JSX 문법을 사용할 수 있다. 단 `.ts`에서는 사용 불가능하며 확장자를 `.tsx`로 변경해야 한다.

### Pre-rendering

- NextJS로 만들어진 페이지는 초기 state에 대한 DOM 요소들이 잘 담겨 있는 HTML(=정적 페이지)로 이루어져 있다.
  따라서 브라우저의 script 사용을 해제하더라도 사용자는 기본적인 페이지를 볼 수 있다. (상호작용은 안되겠지만)

→ UX 개선이 기대된다. (React 코드가 로딩될 때까지 흰 화면만 보이는 것은 부정적 경험이므로)

### Hydrate

- Pre-rendering을 통해 만들어진 정적 페이지를 React 코드와 매칭시켜 동적인 페이지로 만드는 과정

### Link

- `<a>` 태그를 사용하면 새로고침이 일어나기 때문에, 상태가 초기화될 뿐만 아니라 페이지가 느려짐.
- ~~Link 요소는 `className`이나 `style`을 가질 수 없다. (필요한 경우 Link 요소 하위 `<a>` 태그에 적용하자)~~ 라고 강의에 나와있지만 NextJS가 버전업되면서 수정된 듯 하다.

### Router

- 현재 URL 정보를 담고 있는 객체 (pathname, query 등)

### CSS Modules

- `.module.css` 확장자를 가진 파일에 class에 대한 style을 정의하고, 컴포넌트에서 해당 파일을 `import`해 className으로 추가함으로써 style을 적용할 수 있다.

### Styled JSX

- 컴포넌트 파일 안에 `<style>` 태그를 작성하면 해당 컴포넌트에 한정해서 작성한 스타일이 적용된다.

### Global Styled JSX

- Styled JSX에 global 속성을 추가하면 해당 컴포넌트가 포함된 페이지 내 모든 컴포넌트에 스타일이 적용된다.

### App Component

- `pages/_app.js` 파일에서 페이지 템플릿을 구성할 수 있다.
- NextJS에서 css 파일 자체를 불러오는 것은 App Component 내에서만 가능하다. (다른 컴포넌트 파일에서는 CSS Module만 불러올 수 있음)

### Layout Pattern

- JSX 요소를 props로 받는 컴포넌트를 레이아웃으로 활용할 수 있다. 레이아웃을 적용할 컴포넌트를 단순히 레이아웃 컴포넌트로 감싸면 된다.

### Head

- 컴포넌트가 렌더링될 때 해당 컴포넌트에 포함된 Head 컴포넌트 내용이 html의 `<head>`에 포함된다.

### Redirect

- `next.config.js`에 redirects 필드를 추가함으로써 리디렉션을 수행할 수 있다. (외부 링크 가능, URL parameter 가능)

### Rewrite

- `next.config.js`에 rewrites 필드를 추가함으로써 리디렉션 URL을 Next 앱 단에서 마스킹할 수 있다.

### 환경변수

- 따로 dotenv 라이브러리를 설치하지 않아도 된다.
- 클라이언트 파일(브라우저)에서는 변수명이 `NEXT_PUBLIC_`으로 시작하는 환경변수만 참조할 수 있다.

### Server Side Props

- 렌더링 이전에 서버 단에서 `getServerSideProps` 함수가 호출되며, 반환될 객체를 컴포넌트에서 props로 전달 받을 수 있다.

  → 데이터 fetch 등을 서버 단에서 미리 수행할 수 있다. (이 경우 데이터가 html에 포함되므로 JavaScript가 비활성화된 브라우저에서도 완성된 페이지를 볼 수 있음)

- `getServerSideProps` 함수는 `pages/` 하위에 있는 파일에 작성해야 한다.
- `getServerSideProps` 함수를 반드시 `export`해야 동작한다.
- `getServerSideProps` 함수 내에서 사용할 URL은 절대경로만 가능하다.
