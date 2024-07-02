<script>
    import { locale } from "../stores";
    const page_text = {
        "Português": "Todos os direitos reservados.",
        "English": "All rights reserved."
    }
</script>


<div class="copyrightMessage">&copy Copyright Pedro Duarte Faria. {@html page_text[$locale]}</div>


<style>
    .copyrightMessage {
        margin-top: 60px;
        margin-bottom: 30px;
    }
</style>