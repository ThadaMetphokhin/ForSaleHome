<template>
    <div class="footer">
        <p>@CpoyRight 2023 ChangThai Inc. All Rights Reserved</p>

    </div>
</template>
<style scroped>
.footer{
    text-align: center;
    z-index: -1;
    position: relative;
    height: 3rem;
    bottom: -1rem;
    background-color: rgb(43, 44, 50,1);
    text-align: center;
}
.footer p{
    color: white;
    position: absolute;
    left: 30rem;
}

@media screen and (max-width:420px){
    .footer{
        bottom: -1.6rem;
    }
    .footer p{
        top: 1.2rem;
        position: absolute;
        left:4.5rem;
        font-size: 0.1rem;
    }
}
</style>