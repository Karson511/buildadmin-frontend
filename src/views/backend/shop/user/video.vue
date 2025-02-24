<template>
    <div>
        <div class="el-video-box" @click="viewVideo" :style="{ width: `${width}px`, height: `${height}px` }" v-show="isLoaded">
            <video
                @loadedmetadata="handleLoadedMetadata"
                :width="width"
                :height="height"
                :style="{ 'object-fit': fit }"
                ref="myvideo"
                :src="src"
            ></video>
            <img
                src="~assets/icons/play.svg"
                style="position: absolute"
                v-if="showPlayIcon"
                :style="{ width: `${width / 2}px`, height: `${height / 2}px`, top: `${height / 4}px`, left: `${width / 4}px` }"
            />
        </div>
        <div v-show="!isLoaded" class="el-video-box error-box" @click="viewVideo" :style="{ width: `${width}px`, height: `${height}px` }">
            <div v-if="enableCustomError">
                <slot name="customError"></slot>
            </div>
            <span class="errorIcon" v-else>加载失败</span>
        </div>
        <el-dialog v-model="showVideo" :fullscreen="true" class="videoDialog" append-to-body>
            <div style="margin: 100px auto; width: 800px; height: 600px" v-if="!customPreview">
                <video width="800" height="600" controls ref="video" :src="src"></video>
            </div>
            <div v-if="customPreview">
                <slot name="previewVideo"> </slot>
            </div>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
// 定义 props
const props = defineProps({
    width: {
        type: String,
        default: '60',
    },
    height: {
        type: String,
        default: '60',
    },
    fit: {
        type: String,
        default: 'none',
    },
    src: {
        type: String,
        default: '',
    },
    customPreview: {
        type: Boolean,
        default: false,
    },
    enablePreview: {
        type: Boolean,
        default: false,
    },
    enableCustomError: {
        type: Boolean,
        default: false,
    },
})

// 定义 emits
const emit = defineEmits(['loadeddataCallback', 'openPreviewCallback'])

// 定义 reactive 状态
const showVideo = ref(false)
const showPlayIcon = ref(true)
const isLoaded = ref(false)
const myvideo = ref<HTMLVideoElement | null>(null)

// 处理 loadedmetadata 事件
const handleLoadedMetadata = () => {
    if (myvideo.value) {
        isLoaded.value = true
        emit('loadeddataCallback', myvideo.value)
    }
}

// 监听 showVideo 的变化
watch(showVideo, (newVal) => {
    if (newVal && myvideo.value) {
        myvideo.value.load()
    }
})

// 定义方法
const viewVideo = () => {
    console.log(props.enablePreview, isLoaded.value)
    if (props.enablePreview && isLoaded.value) {
        showVideo.value = true
        emit('openPreviewCallback', props.customPreview)
    } else {
        if (myvideo.value && myvideo.value.paused) {
            showPlayIcon.value = false
            myvideo.value.play()
        } else if (myvideo.value) {
            myvideo.value.pause()
            showPlayIcon.value = true
        }
    }
}

// 生命周期钩子
onMounted(() => {
    if (myvideo.value) {
        myvideo.value.addEventListener('loadedmetadata', handleLoadedMetadata)
    }
})
</script>

<style scoped>
.videoDialog :deep(.el-dialog__headerbtn) {
    top: 50px;
    right: 70px;
    background: rgba(102, 104, 107, 0.6);
    cursor: pointer;
    font-size: 24px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid gray;
}
.videoDialog :deep(.el-dialog .is-fullscreen) {
    background: rgba(0, 0, 0, 0.05);
}
.videoDialog :deep(.el-dialog__headerbtn .el-dialog__close) {
    color: whitesmoke;
}
.videoDialog :deep(.el-dialog__headerbtn .el-dialog__close:hover) {
    color: whitesmoke;
}
.el-video-box {
    position: relative;
    cursor: pointer;
    border: 1px solid lightgrey;
}
.errorIcon {
    font-size: 12px;
    vertical-align: middle;
    color: gray;
}
.error-box {
    line-height: 70px;
    text-align: center;
}
</style>
