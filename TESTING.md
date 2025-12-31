# Testing Guide

Bu loyihada Jest va React Testing Library ishlatilgan.

## Test Strukturasi

```
__tests__/
├── components/       # Component testlari
├── lib/             # Utility function testlari
└── service/         # API service testlari (optional)
```

## Testlarni Ishga Tushirish

### Barcha testlarni ishga tushirish

```bash
npm run test
# yoki
pnpm test
```

### Watch mode (o'zgarishlarni kuzatish)

```bash
npm run test:watch
# yoki
pnpm test:watch
```

### Coverage report

```bash
npm run test:coverage
# yoki
pnpm test:coverage
```

## Test Yozish Qoidalari

### 1. Component Test Misoli

```typescript
import { render, screen } from '@testing-library/react'
import MyComponent from '@/components/MyComponent'

describe('MyComponent', () => {
	it('renders correctly', () => {
		render(<MyComponent />)
		expect(screen.getByText('Expected Text')).toBeInTheDocument()
	})

	it('handles click events', async () => {
		const handleClick = jest.fn()
		render(<MyComponent onClick={handleClick} />)

		const button = screen.getByRole('button')
		await userEvent.click(button)

		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
```

### 2. Utility Function Test

```typescript
import { myUtilFunction } from '@/lib/utils'

describe('myUtilFunction', () => {
	it('returns expected output', () => {
		const result = myUtilFunction('input')
		expect(result).toBe('expected output')
	})

	it('handles edge cases', () => {
		expect(myUtilFunction('')).toBe('')
		expect(myUtilFunction(null)).toBe(null)
	})
})
```

### 3. API Service Test (Mock)

```typescript
import { getBlogs } from '@/service/blog.service'

jest.mock('@/service/blog.service')

describe('Blog Service', () => {
	it('fetches blogs successfully', async () => {
		const mockBlogs = [{ title: 'Test Blog' }]
		;(getBlogs as jest.Mock).mockResolvedValue(mockBlogs)

		const result = await getBlogs()
		expect(result).toEqual(mockBlogs)
	})
})
```

## Test Coverage Maqsadi

- ✅ Components: 70%+
- ✅ Utils: 80%+
- ✅ Services: 60%+
- ✅ Overall: 70%+

## Best Practices

1. **Har bir component uchun test yozing**
2. **Edge case'larni test qiling**
3. **User interaction'larni test qiling**
4. **Accessibility'ni test qiling**
5. **Mock external dependencies**

## Foydali Havolalar

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
