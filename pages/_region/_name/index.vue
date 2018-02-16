<template>
    <div class="column">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><a href="#">{{ this.$route.params.region }}</a></li>
                <li><a href="#">{{ this.$route.params.name }}</a></li>
            </ul>
        </nav>
    </div>
</template>