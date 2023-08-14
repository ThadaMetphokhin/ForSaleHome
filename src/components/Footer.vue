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
@media screen and (max-width:400px){
    .footer p{
        font-size: 0.5rem;
    }
}
</style>