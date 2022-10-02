<template>
    <header>
        <h1>TODO it!</h1>
    </header>
</template>

<!-- scoped : CSS는 Cascading Style Sheets로서 이름에 
    붙었다시피 하위 스타일이 상위 스타일을 상속한다. 
    하지만 scoped 속성을 통해 해당 컴포넌트만의 스타일을 정의할 수 있다.-->
<style scoped>
    h1 {
        color: #2F3B52;
        font-weight: 900;
        margin: 2.5rem 0 1.5rem;
    }
</style>