const useSearchParams = () => {
    const params = new URLSearchParams(window.location.search)
    return { url: params.get('ws'), me: params.get('me'), debug: params.get('debug') }
}

export default useSearchParams
