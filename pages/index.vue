<style scoped lang="scss">

</style>

<template>
    <div>
        <h4 class="mt-3 text-lg font-semibold">Bio</h4>

        <img/>

        <div class="flex flex-col sm:flex-row sm:space-x-10 sm:space-y-0 space-y-4 mb-5">
            <div class="w-1/2">
                <h5 class="mt-3 mb-1 text-lg font-semibold">
                    {{ $const.fullName }}
                </h5>
                <p class="mb-5 text-sm font-thin">
                    Lives in Pretoria, Gauteng, South Africa
                </p>

                <p class="text-sm font-thin">
                    I am a very dedicated hard-working individual. I have a proven record of exceeding expectations in a
                    variety of professional environments with my main focus being remote managerial with administrative
                    duties along with customer care. I am very detail oriented, highly organised, responsible and an
                    excellent communicator. I always strive to learn more and develop my skills as much as I possibly
                    can.
                </p>
            </div>
            <div class="w-1/2">
                <h5 class="mt-3 text-lg font-semibold">
                    CV
                </h5>

                <p class="text-base font-thin">Specialties</p>
                <ul class="text-sm list-disc list-inside">
                    <li>Social Media</li>
                    <li>Strategic Planning</li>
                    <li>Correspondence</li>
                    <li>Office Administration</li>
                    <li>Research</li>
                    <li>Public speaking</li>
                    <li>Reception</li>
                    <li>Management</li>
                </ul>

                <div class="h-6"></div>

                <p class="text-base font-thin">Work Exprerience</p>
                <ul class="text-sm list-disc list-inside">
                    <li><span class="text-xs">January 2022 - Currently</span> &nbsp;&nbsp;&nbsp;&nbsp; - The Bio-Bunker.</li>
                    <li><span class="text-xs">June 2014 - November 2016</span> - Medihelp Medical Scheme (Strata).</li>
                    <li><span class="text-xs">June 2011 - November 2013</span> - Lolec Electrical & Plumbing Services.</li>
                </ul>

                <div class="h-6"></div>

                <p class="text-base font-thin">Education</p>
                <ul class="text-sm list-disc list-inside">
                    <li><span class="text-xs">2009</span> - National Senior Certificate (Matric).</li>
<!--                    <li>Afrikaans First Language</li>
                    <li>English Second Language</li>
                    <li>Mathematical Literacy (Distinction)</li>
                    <li>Electrical Technology</li>
                    <li>Technical Drawings</li>
                    <li>Life Orientation</li>-->
                </ul>

                <div class="h-6"></div>

                <p class="text-base font-thin">Courses</p>
                <ul class="text-sm list-disc list-inside">
                    <li><span class="text-xs">2014</span> - Medihelp Medical Scheme.</li>
                    <!--                    <li>Afrikaans First Language</li>
                                        <li>English Second Language</li>
                                        <li>Mathematical Literacy (Distinction)</li>
                                        <li>Electrical Technology</li>
                                        <li>Technical Drawings</li>
                                        <li>Life Orientation</li>-->
                </ul>

                <div class="h-6"></div>

                <p class="text-base font-thin">Additional Skills</p>
                <ul class="text-sm list-disc list-inside">
                    <li>Time Management</li>
                    <li>Customer Service</li>
                    <li>Typing</li>
                    <li>Filing</li>
                    <li>Communication</li>
                    <li>Organization Skills</li>
                    <li>Multitasking</li>
                    <li>Self-management</li>
                    <li>Flexible Schedule</li>
                    <li>Prioritize Workload</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "index",
    layout: "default-layout",
}
</script>
